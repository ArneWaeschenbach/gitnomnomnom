import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.jsx')
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
  },
  plugins: [react()]
})
