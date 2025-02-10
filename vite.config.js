import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  transformAssetUrls: {
    // The Vue plugin will re-write asset URLs, when referenced
    // in Single File Components, to point to the Laravel web
    // server. Setting this to `null` allows the Laravel plugin
    // to instead re-write asset URLs to point to the Vite
    // server instead.
    base: null,

    // The Vue plugin will parse absolute URLs and treat them
    // as absolute paths to files on disk. Setting this to
    // `false` will leave absolute URLs un-touched so they can
    // reference assets in the public directory as expected.
    includeAbsolute: false,
},
})
