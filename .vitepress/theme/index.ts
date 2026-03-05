import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "@catppuccin/vitepress/theme/mocha/lavender.css";
import "./custom.css";
import Layout from './layout.vue';

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme;