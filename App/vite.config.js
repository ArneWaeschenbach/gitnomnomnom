import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Ausgabeverzeichnis für den Build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.jsx') // Einstiegsdatei für den Build
      },
      output: {
        entryFileNames: 'my-lib.js', // Name der generierten Datei
        format: 'umd', // Format der generierten Datei
        name: 'MyLib', // Name der exportierten Bibliothek
        globals: {
          react: 'React' // Globale Variable für React-Abhängigkeit
        }
      }
    }
  },
  plugins: [react()] // React-Plugin hinzufügen
})