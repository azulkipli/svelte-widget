import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import UnoCSS from "unocss/vite";
// import presetWind from '@unocss/preset-wind'
import { presetAttributify, presetUno } from "unocss";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: true,
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      output: {
        entryFileNames:
          mode !== "production"
            ? `svelte-widget-${mode}.js`
            : "svelte-widget.js",
      },
    },
  },
  esbuild: {
    pure: mode === "production" ? ["console.log", "console.info", "debug"] : [],
  },
  plugins: [
    svelte(),
    UnoCSS({
      presets: [presetAttributify(), presetUno()],
      shortcuts: [
        { "flik-primary": "bg-#1f1f54" },
        {
          "btn-flik":
            "block w-full rounded flik-primary text-white p-4 text-15px font-medium border-0 transition hover:bg-blue-500",
        },
        { "cool-blue": "bg-blue-700 text-white" },
        {
          "product-tag":
            "whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-12px font-normal rounded-full",
        },
        {
          "btn-favorite":
            "absolute right-4 top-4 z-10 border-0 rounded-full bg-white px-1.5 pb-0.5 pt-1.5 text-gray-500 transition hover:bg-blue-500 hover:text-white",
        },
      ],
    }),
  ],
}));
