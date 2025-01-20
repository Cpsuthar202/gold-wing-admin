import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

const FRONTEND_HOST = process.env.VITE_APP_HOST;
const FRONTEND_PORT = process.env.VITE_APP_PORT;
console.log("Port from env:", FRONTEND_PORT);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  optimizeDeps: {
    exclude: ["chunk-EWS7HTKY.js"],
  },
  server: {
    port: Number(FRONTEND_PORT) || 3003,
    host: FRONTEND_HOST || "localhost",
  },
  build: {
    outDir: "dist",
  },
  preview: {
    port: 3001,
    host: FRONTEND_HOST || "localhost",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@image": path.resolve(__dirname, "src/assets/image/index"),
      "@svg": path.resolve(__dirname, "src/assets/svg/index"),
      "@color": path.resolve(__dirname, "src/theme/utils/color"),
      "@components": path.resolve(__dirname, "src/components"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Add other extensions if needed
  },
});
