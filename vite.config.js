import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
  base: mode === "production" ? "/your-good-coach-template/" : "/",
}));
