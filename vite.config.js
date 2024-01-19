import glob from 'glob';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      assetsDir: 'assets',
      assetsInclude: ['.src/fonts/**'],
      sourcemap: true,
      chunkSizeWarningLimit: 900,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.endsWith('.css')) {
              return 'styles';
            }
            if (id.endsWith('.js')) {
              return 'scripts';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
      cache: {
        maxAge: 3600,
      },
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
