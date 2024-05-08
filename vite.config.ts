import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      devOptions: {
        enabled: true,
        type: "module",
      },
      workbox: {
        cleanupOutdatedCaches: false,
        sourcemap: true,
      },
      includeAssets: ["vite.svg", "logo192.png", "logo512.png"],
      manifest: {
        name: "Imperium",
        short_name: "Imperium",
        description: "",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
