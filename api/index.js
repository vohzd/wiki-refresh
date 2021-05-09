/* just need express */
const express                           = require("express");
const app                               = express();


/* configures things like CORS/cookie parsing etc*/
require("./config/server.js")(app);

/* our routes... */
const websiteRoutes                     = require("./routes/website/index.js");
//const oauthRoutes                      = require("./routes/oauth/index.js");

app.use("/", websiteRoutes);
//app.use("/oauth", oauthRoutes);


/* send it back to nuxt */
module.exports = {
  path: "/api",
  handler: app
}
