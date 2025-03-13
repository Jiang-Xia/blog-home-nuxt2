// https://nuxt.com/docs/api/configuration/nuxt-config
import Icons from 'unplugin-icons/vite';
import tailwindcss from '@tailwindcss/vite';

const prefixPath: any = process.env.VITE_NUXT_PREFIX_PATH;
console.warn({
  BASE_URL: process.env.VITE_NUXT_BASE_URL,
  当前环境: process.env.NODE_ENV,
  prefixPath,
});
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.staticfile.org/csshake/1.5.3/csshake.min.css',
        },
      ],
      script: [
        {
          defer: true,
          src: 'https://cdn.staticfile.net/pdf-lib/1.17.1/pdf-lib.min.js',
        },
        {
          defer: true,
          src: 'https://cdn.staticfile.net/pdf.js/3.9.179/pdf.min.js',
        },
        { defer: true, src: 'jsencrypt.min.js' },
      ],
    },
    pageTransition: {
      name: 'scale',
      appear: true,
      mode: 'out-in',
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },
  // tailwindcss:{
  //   cssPath:'~/assets/css/main.css',
  // },
  eslint: {
    config: {
      stylistic: {
        indent: 2, // 缩进
        semi: true, // 分号
        quotes: 'single', // 单引号
        jsx: true, // 支持jsx
      },
    },
  },
});
