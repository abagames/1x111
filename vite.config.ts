import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
  build: {
    outDir: `./docs/build/`,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("src/games/")) {
            return "games";
          }
        },
      },
    },
  },
});
