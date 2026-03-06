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

  themeConfig: {
    siteTitle: 'LWL WIKI',    
    sidebar: [
      { text: 'Introduction 📚', link: '/introduction' },
      {
        text: 'Wiki 🌐',
        collapsed: false,
        items: [
          { text: 'AI 🤖', link: '/ai' },
          { text: 'Mobile 📱', link: '/mobile' },
          { text: 'Streaming 📺', link: '/streaming' },
          { text: 'Games 👾', link: '/games' }
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