import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true, // Consolida todos os tipos em um único arquivo .d.ts
    }),
  ],
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
