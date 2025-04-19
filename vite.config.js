import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NO importes tailwindcss acá

export default defineConfig({
  plugins: [react()], // solo react
})
