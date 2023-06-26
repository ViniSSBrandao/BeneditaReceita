import { defineConfig } from "vite";
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].[ext]",
        entryFileNames: "assets/[name].ts",
      },
    },
    write: true,
  },
});
