const strapiBaseUri = process.env.API_URL || "http://localhost:1337";

export default {
  env: {
    strapiBaseUri,
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Staatliches",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["@assets/scss/main.scss"],
  plugins: [
    { src: "./plugins/simple-xgrid.js", ssr: false },
    { src: "./plugins/vue-match-heights.js", ssr: false },
  ],
  modules: ["@nuxtjs/markdownit", "@nuxtjs/strapi"],
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "articles",
        type: "collection",
      },
      {
        name: "categories",
        type: "collection",
      },
      {
        name: "homepage",
        type: "single",
      },
      {
        name: "global",
        type: "single",
      },
    ],
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
};
