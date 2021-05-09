module.exports = {
  axios: {
    proxyHeaders: false,
    credentials: true
  },
  build: {
    optimizeCSS: true
  },
  head: {
    title: "Wiki Refresh",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "language", name: "language", content: "EN" }
    ],
    link: [
      { rel: "canonical", href: "https://something" }
    ],
  },
  loading: { color: '#2a4b55' },
  modules: [
    "@nuxtjs/axios"
  ],
  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" }
  ],
}
