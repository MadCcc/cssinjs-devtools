import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    platform: 'browser',
    entry: {
      'src/popup/index': {
        output: 'dist/popup',
      },
      'src/devtools/index': {
        output: 'dist/devtools',
      },
      'src/devtools/panel': {
        output: 'dist/devtools',
      },
      'src/content': {
        output: 'dist'
      },
      'src/web-accessible': {
        output: 'dist'
      }
    }
  }
});
