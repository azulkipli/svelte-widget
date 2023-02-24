import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: true,
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      output: {
        entryFileNames: mode !== "production" ? `svelte-widget-${mode}.js` : "svelte-widget.js",
        assetFileNames: "svelte-widget.[ext]",
      },
    },
  },
  esbuild: {
    pure: mode === "production" ? ["console.log", "console.info", "debug"] : [],
  },
  plugins: [
    svelte(), 
    UnoCSS({ /* options */
      // mode: 'shadow-dom',
      shortcuts: [
        { 'cool-blue': 'bg-blue-500 text-white' },
        { 'cool-green': 'bg-green-500 text-black' },
      ],
    }),
    
  ],
}))

