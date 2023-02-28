import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    entry: {
      'src/popup/index': {
        output: 'dist/popup',
      },
      'src/devtools/index': {
        output: 'dist/devtools',
      }
    }
  }
});
