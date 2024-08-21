import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      contexts: "/src/contexts",
      helpers: "/src/helpers",
      hooks: "/src/hooks",
      layouts: "/src/layouts",
      pages: "/src/pages",
      store: "/src/store",
      templates: "/src/templates",
      icons: "/src/assets/icons",
      images: "/src/assets/images",
      mixins: "/src/assets/styles/_mixins.scss"
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "assets/styles/_mixins.scss" as *;'
      }
    }
  },
  plugins: [
    vue(),
    // svgr(),
    svgLoader({
      // svgo: false
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
})
