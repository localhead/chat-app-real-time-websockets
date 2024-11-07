// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import './src/utils/colors.scss'; 
        @import './src/utils/scrollbar.scss';
        `,
      },
    },
  },
  base: "https://github.com/localhead/chat-app-real-time-websockets.git",
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
});
