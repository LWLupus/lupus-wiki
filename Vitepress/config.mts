import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Wotaku Wiki",
  description: "A collection of awesome resources",
  themeConfig: {
    search: { provider: 'local' }, // This gives you a free search bar!
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Resources',
        items: [
          { text: 'Streaming', link: '/streaming' },
          { text: 'Software', link: '/software' }
        ]
      }
    ]
  }
})