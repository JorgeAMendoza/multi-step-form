import path from 'node:path'
import { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const configuration: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      $lib: path.resolve(__dirname, './src/lib'),
      $components: path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
}

export default configuration
