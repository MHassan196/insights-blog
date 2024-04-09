import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api' : {
        target: 'https://insights-blog-a5og.vercel.app',
        // target: 'http://localhost:8080',
        secure: false,
      }
    }
  },
  plugins: [react()],
})
