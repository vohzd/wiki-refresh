const puppeteer                              = require("puppeteer");
const path                                   = require("path");
const rootDir                                = path.resolve();

async function getHTML(url){
  console.log("service: getHTML")
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  return page.content()
}
module.exports = {
  getHTML,
};
