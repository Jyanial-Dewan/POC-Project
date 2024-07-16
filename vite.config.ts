import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // server: {
  //   host: true,
  //   proxy: {
  //     "/api/v2": {
  //       target: "http://129.146.85.244",
  //       // cors: true,
  //       changeOrigin: true,
  //       secure: true,
  //       ws: true,
  //       rewrite: (path) => path.replace(/^\/api\/v2/, ""),
  //     },
  //   },
  // },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
