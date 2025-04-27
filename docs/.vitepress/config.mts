import { defineConfig, type DefaultTheme } from 'vitepress'
import { head, nav, sidebar } from './configs'

// 主題 配置
const themeConfig: DefaultTheme.Config = {
  logo: '/apple-touch-icon.png',
  // https://vitepress.dev/reference/default-theme-config
  siteTitle: '烤肉聚-讀書會',
  outline: {
    level: [2, 3],
  },
  nav,
  sidebar,

  // socialLinks: [
  //   { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }
  // ],
  footer: {
    copyright: 'MIT Lincensed | Copyright © 2024-present Eason',
  }
}

// markdown 配置
const markdown = {
  lineNumbers: true
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-firesidecoder/',   // 站點將部署在這個 base URL路徑
  lang: 'zh-TW',
  title: "烤肉聚-讀書會",
  description: '學習筆記',
  head,
  themeConfig,
  markdown,
  vite: {
    server: {
      port: 8509
    }
  }
})
