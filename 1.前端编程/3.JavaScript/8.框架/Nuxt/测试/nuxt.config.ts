// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxt/content",
    "@pinia/nuxt",
  ],

  app: {
    head: {
      title: "测试",
    },
  },

  css: ["~/assets/css/globl.css"],

  alias: {
    images: fileURLToPath(new URL("./assets/images", import.meta.url)),
  },

  components: [
    {
      path: "~/components", // 会递归扫描所有的子目录
      pathPrefix: true, // 使用组件的时候是否要添加目录前缀 true需要添加 默认为true
    },
  ],

  devServer: {
    port: 3008,
  },
});
