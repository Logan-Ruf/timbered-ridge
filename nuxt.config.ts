// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {
  target: "static",
  css: ["@/assets/css/main.css"],
  modules: ["@storyblok/nuxt", "@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon", "@pinia/nuxt", "nuxt-swiper"],
  buildModules: ["@nuxt/typescript-build"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  vite: {
    resolve: {
      alias: process.env.NODE_ENV === "development" ? { vue: "vue/dist/vue.esm-bundler.js" } : {}
    },
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    },
    optimizeDeps: {
      exclude: ["fsevents"]
    },
    server: {
      hmr: {
        protocol: "wss" // Use with proxy
        // protocol: "ws" // Use without proxy
      }
    }
  },
  storyblok: {
    accessToken: process.env.STORYBLOCK_TOKEN,
    bridge: process.env.NODE_ENV === "development",
    devtools: process.env.NODE_ENV === "development",
    apiOptions: {
      region: "us" // Set 'US" if your space is created in US region (EU default)
    }
  },
  image: {
    provider: "storyblok",
    storyblok: {
      baseURL: "https://a-us.storyblok.com"
    }
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in"
    }
  },
  nitro: {
    prerender: {
      crawler: false,
      routes: ["/", "/our-homes/ridge/", "/our-homes/timbered/", "/our-homes/custom/", "/our-homes/gallery/"]
    }
  }
}

export default config
