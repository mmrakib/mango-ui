import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.tsx'),
      name: 'MangoUI'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'StyledComponents'
        }
      }
    }
  }
})
