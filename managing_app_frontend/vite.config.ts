import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
const __dirname = path.resolve();
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
})
// make vite understand the baseUrl and paths
