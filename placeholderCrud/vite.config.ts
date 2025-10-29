// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// 1. Importiamo il NUOVO plugin di ottimizzazione
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      // 3. Configuriamo le opzioni (esempio)
      filename: 'dist/stats.html', // Percorso di output relativo alla 'root'
      open: true,                  // Apre automaticamente il report nel browser
      gzipSize: true,              // Mostra la dimensione gzippata (fondamentale)
      brotliSize: true,            // Mostra la dimensione Brotli (ancora più realistica)
      template: 'treemap',           // 'sunburst' o 'treemap' (preferenza personale)
    }),
    // 2. Aggiungiamo il plugin alla pipeline
        ViteImageOptimizer({
          // Configurazione per gli ottimizzatori
          // (Spesso i default sono già eccellenti)
          png: {
            quality: 85, // Qualità da 0 a 100
          },
          jpeg: {
            quality: 85,
          },
          jpg: {
            quality: 85,
          },
          // Possiamo anche configurare la generazione di formati moderni
          webp: {
            quality: 85,
          },
          avif: {
            quality: 70, // AVIF è molto efficiente, si può scendere
          },
        }),
  ],
  
})
