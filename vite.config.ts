import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, proxy: { "/api": "http://localhost:4174" } },
  build: {
    // Three.js + R3F is intentionally large; suppress cosmetic chunk size warning.
    chunkSizeWarningLimit: 1024,
  },
});
