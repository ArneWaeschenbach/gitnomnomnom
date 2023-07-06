import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx')
      },
      output: {
        entryFileNames: 'my-lib.js',
        format: 'umd',
        name: 'MyLib',
        globals: {
          react: 'React'
        }
      }
    }
  }
})
