// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  ssr: true,

  nitro: {
    preset: "github-pages",
  },

  app: {
    head: {
      title: "filepost.io — File sharing, simplified",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "filepost.io was a simple, fast way to share large files online. The service has been shut down.",
        },
        { property: "og:title", content: "filepost.io" },
        {
          property: "og:description",
          content: "filepost.io has been shut down.",
        },
        { name: "robots", content: "noindex, nofollow" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap",
        },
      ],
    },
  },
});
