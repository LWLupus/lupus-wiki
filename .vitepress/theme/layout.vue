<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { useData } from 'vitepress'
import { watch, onMounted } from 'vue'

const route = useRoute()
const { frontmatter } = useData()

const wrapEmojis = () => {
  setTimeout(() => {
    document.querySelectorAll('.vp-doc p, .vp-doc li').forEach((el) => {
      if (el.getAttribute('data-processed')) return
      el.innerHTML = el.innerHTML
        .replace(/💰/g, '<span class="tooltip" data-tooltip="Paid">💰</span>')
        .replace(/🌟/g, '<span class="tooltip" data-tooltip="Favorite">🌟</span>')
      el.setAttribute('data-processed', 'true')
    })
  }, 100)
}

onMounted(wrapEmojis)
watch(() => route.path, wrapEmojis)
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image v-if="frontmatter.layout === 'home'">
      <div class="ascii-hero-container">
        <pre v-pre class="ascii-art">
  .---.     .--.      .--.  .---.             .--.      .--..-./`) .--.   .--. .-./`)  
  | ,_|     |  |_     |  |  | ,_|             |  |_     |  |\ .-.')|  | _/  /  \ .-.') 
,-./  )     | _( )_   |  |,-./  )             | _( )_   |  |/ `-' \| (`' ) /   / `-' \ 
\  '_ '`)   |(_ o _)  |  |\  '_ '`)           |(_ o _)  |  | `-'`"`|(_ ()_)     `-'`"` 
 > (_)  )   | (_,_) \ |  | > (_)  )           | (_,_) \ |  | .---. | (_,_)   __ .---.  
(  .  .-'   |  |/    \|  |(  .  .-'           |  |/    \|  | |   | |  |\ \  |  ||   |  
 `-'`-'|___ |  '  /\  `  | `-'`-'|___         |  '  /\  `  | |   | |  | \ `'   /|   |  
  |        \|    /  \    |  |        \        |    /  \    | |   | |  |  \    / |   |  
  `--------``---'    `---`  `--------`        `---'    `---` '---' `--'   `'-'  '---'  
        </pre>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
:global(:root) {
  --ascii-color: #7287fd; 
  --ascii-glow-base: rgba(114, 135, 253, 0.4);
  --ascii-glow-hover: rgba(114, 135, 253, 0.8);
}

:global(.dark) {
  --ascii-color: #b4befe;
  --ascii-glow-base: rgba(180, 190, 254, 0.4);
  --ascii-glow-hover: rgba(180, 190, 254, 0.8);
}

.ascii-hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.ascii-art {
  font-family: monospace;
  font-size: 16px;
  line-height: 1.2;
  font-weight: bold;
  cursor: default;
  color: var(--ascii-color);
  text-shadow: 5px 5px 10px var(--ascii-glow-base);
  animation: float 5s ease-in-out infinite;
  transition: text-shadow 0.3s ease-in-out;
}

.ascii-art:hover {
  text-shadow: 
    0 0 10px var(--ascii-color), 
    0 0 25px var(--ascii-glow-hover), 
    0 0 50px var(--ascii-glow-hover);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

@media (max-width: 768px) {
  .ascii-art {
    font-size: 8px;
  }
}
</style>