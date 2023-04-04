import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactClickToComponent(), svgr(), ViteImageOptimizer()],
});
