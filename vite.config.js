import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // تأكد من استخدام الاسم الصحيح للاستيراد

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 75,
      },
      jpg: {
        quality: 75,
      },
      webp: {
        quality: 75, // بدلاً من lossless لتقليل المساحة أكتر
      },
      avif: {
        quality: 70, // صيغة AVIF قوية جداً حتى في الجودة القليلة
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
        ],
      },
    }),
  ],
});
