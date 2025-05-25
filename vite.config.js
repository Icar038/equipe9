import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: '0.0.0.0', // Permite acesso via IP local (em outros dispositivos na rede)
    port: 5173,       // Define a porta fixa (pode mudar se já estiver em uso)
  },
  build: {
    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
    ],
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
