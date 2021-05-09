const router                              = require("express").Router();

const { errorHandler }                    = require("../../helpers/errorHandler.js");

const cheerio                             = require("cheerio");

const {
  getHTML,
}                                         = require("../../services/puppeteer/index.js");

const {
  removeProtocol
}                                         = require("../../helpers/regex.js");

router.get("/website", async (req, res, next) => {
  const url = req.query.url;

  try {
    const html = await getHTML(url);
    const $ = cheerio.load(html);

    $("#siteNotice").remove();
    $("#top").remove();
    $("#siteSub").remove();
    $(".box-More_citations_needed").remove();
    $(".mw-jump-link").remove();
    $(".mw-editsection").remove();
    $(".sidebar-navbar").remove();
    $("style").remove();
    $(".navigation-not-searchable").remove();
    $(".toctogglespan").remove();
    $(".sistersitebox").remove();
    $(".box-One_source").remove();
    $(".mw-indicators").remove();
    $(".box-More_footnotes").remove();
    $(".metadata").remove();
















    //$(".mw-indicators").remove();


  //  const inner = $("#content").length > 0 ? $("#content").html() : $("#bodyContent").html()

  const inner = $("#content").html();
    return res.send(inner);
  }
  catch (e){ return errorHandler(res, e); }
});


router.delete("/website/:id", async (req, res) => {
  console.log("route: DELETE /website/:id");
  console.log(req.params.id);
  try {
    await deleteWebsite(req.params.id);
    res.send("deleted");
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
