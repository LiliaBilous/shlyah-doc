// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio', '@nuxt/image'],
  routeRules: {
    '/': { prerender: true }
  },
  // force module initialization on dev env
  studio: {
    enabled: true
  },
  compatibilityDate: '2024-08-27'
})