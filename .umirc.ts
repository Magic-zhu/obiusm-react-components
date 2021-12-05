import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'obiusm-react-components',
  base: '/obiusm-react-components-docs/',
  publicPath: '/obiusm-react-components-docs/',
  exportStatic: {},
  favicon: './logo.png',
  logo: './logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  dynamicImport: {},
  // more config: https://d.umijs.org/config
});
