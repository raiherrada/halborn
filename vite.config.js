import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        clientMarketing: resolve(__dirname, 'client-marketing.html'),
        socialMedia: resolve(__dirname, 'social-media.html'),
        graphicDesign: resolve(__dirname, 'graphic-design.html'),
	  hireMe: resolve(__dirname, 'hire-me.html'),
      }
    }
  }
});