import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      "/api": {
        target: "https://digimon-api-phi.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});