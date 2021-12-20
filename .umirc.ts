import { defineConfig } from 'dumi';
let config;
if (process.env.SENV === 'development') {
  config = {
    title: 'obiusm-react-components',
    base: '/',
    publicPath: '/',
    exportStatic: {},
    favicon: './logo.png',
    logo: './logo.png',
    outputPath: 'docs',
    mode: 'site',
    dynamicImport: {},
  };
} else {
  config = {
    title: 'obiusm-react-components',
    base: '/obiusm-react-components-docs/',
    publicPath: '/obiusm-react-components-docs/',
    exportStatic: {},
    favicon: './logo.png',
    logo: './logo.png',
    outputPath: 'docs-dist',
    mode: 'site',
    dynamicImport: {},
  };
}

export default defineConfig(config);
