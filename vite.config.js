import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

// Inline the built stylesheet so it never blocks the first paint.
function inlineCss() {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = bundle['index.html']

      if (!html || html.type !== 'asset')
        return

      let source = html.source

      for (const [fileName, output] of Object.entries(bundle)) {
        if (output.type !== 'asset' || !fileName.endsWith('.css'))
          continue

        const link = new RegExp(`<link[^>]+href="[^"]*${fileName}"[^>]*>`)

        if (!link.test(source))
          continue

        source = source.replace(link, `<style>${output.source}</style>`)
        delete bundle[fileName]
      }

      html.source = source
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools(), inlineCss()],
  server: { port: 3000 },
})
