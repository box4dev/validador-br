import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'validador', // Nome da variável global no build UMD
      fileName: (format) => `validador-br.${format === 'es' ? 'js' : format}`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      output: {
        // Exporta o 'default' para o UMD e CJS de forma compatível
        exports: 'named',
      },
    },
    // Gera sourcemaps para facilitar o debug
    sourcemap: true,
  },
});
