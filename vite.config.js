import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: "index.html",
        },
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
    base: mode === "production" ? "/your-good-coach-template/" : "/",
  };
});
