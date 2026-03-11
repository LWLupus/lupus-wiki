import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/lupus-wiki/', 

  description: 'A Wiki made by Lupus',

  title: 'LWL WIKI',

  markdown: {
    theme: {
      light: 'catppuccin-mocha',
      dark: 'catppuccin-mocha',
    },
  },

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { 
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap', 
      rel: 'stylesheet' 
    }]
  ],

  themeConfig: {
    siteTitle: 'LWL WIKI',    
    sidebar: [
      { text: '📚Introduction', link: '/introduction' },
      { text: '📃Changelog', link: '/changelog' },
      {
        text: 'Wiki 🌐',
        collapsed: false,
        items: [
          { text: '🤖AI', link: '/ai' },
          { text: '📱Mobile', link: '/mobile' },
          { text: '📺Streaming', link: '/streaming' },
          { text: '👾Games', link: '/games' },
          { text: '🔨Tools', link: '/tools' }
        ]
      },
      {
        text: 'Misc 💠',
        collapsed: true,
        items: [
          { text: 'Tutorials', link: '/tutorial' },
          { text: 'Test', link: '/test' }
        ]
      }
    ]
  }
});