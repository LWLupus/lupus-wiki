<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Create a reference to the DOM element
const gridRef = ref(null)

const updateMouse = (e) => {
  if (!gridRef.value) return
  
  // Update CSS variables directly on the element for maximum performance
  gridRef.value.style.setProperty('--x', `${e.clientX}px`)
  gridRef.value.style.setProperty('--y', `${e.clientY}px`)
}

onMounted(() => {
  window.addEventListener('mousemove', updateMouse)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse)
})
</script>

<template>
  <div ref="gridRef" class="interactive-grid"></div>
</template>

<style scoped>
.interactive-grid {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transition: background-color 0.5s ease; /* Smooth transition when toggling theme */
}

/* --- DARK MODE (Catppuccin Mocha) --- */
:root.dark .interactive-grid {
  background-color: #1e1e2e;
  background-image: 
    linear-gradient(to right, rgba(180, 190, 254, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(180, 190, 254, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* --- LIGHT MODE --- */
:root:not(.dark) .interactive-grid {
  background-color: #ffffff;
  /* Use a darker, more "paper" like grid line */
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* The dynamic mask (The Reveal) */
.interactive-grid {
  mask-image: radial-gradient(
    circle 300px at var(--x, 50vw) var(--y, 50vh),
    black 20%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    circle 300px at var(--x, 50vw) var(--y, 50vh),
    black 20%,
    transparent 100%
  );
}

/* Ambient Glow Logic */
.interactive-grid::after {
  content: '';
  position: absolute;
  inset: 0;
}

/* Lavender glow for Dark Mode */
:root.dark .interactive-grid::after {
  background: radial-gradient(
    circle 400px at var(--x, 50vw) var(--y, 50vh),
    rgba(180, 190, 254, 0.08),
    transparent 80%
  );
}

/* Subtle "Clear" focus for Light Mode (avoids washing out text) */
:root:not(.dark) .interactive-grid::after {
  background: radial-gradient(
    circle 400px at var(--x, 50vw) var(--y, 50vh),
    rgba(0, 0, 0, 0.02),
    transparent 80%
  );
}
</style>