<script setup>
import DefaultTheme from 'vitepress/theme'
import InteractiveGrid from './components/InteractiveGrid.vue'
import { useRoute } from 'vitepress'
import { useData } from 'vitepress'
import { watch, onMounted } from 'vue'

const { Layout } = DefaultTheme
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
    <template #layout-bottom>
      <InteractiveGrid />
    </template>

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

    <template #home-hero-info-after v-if="frontmatter.layout === 'home'">
      <a href="/changelog" class="changelog-btn">
        v0.1.3 (click to view the changelog)
      </a>
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

/* Changelog Button */

.changelog-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.3rem 0.7rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.changelog-btn:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
}
</style>