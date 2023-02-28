import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    entry: {
      'dist/popup/popup': {
        output: 'dist/popup',
      },
      'dist/devtools/devtools': {
        output: 'dist/devtools',
      }
    }
  }
});
