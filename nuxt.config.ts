import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT ? process.env.PORT.toString() : '3000', // Ensure port is a string
    },
  },

  modules: ['@nuxt/ui'],
});
