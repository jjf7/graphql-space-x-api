import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jjf7.github.io/graphql-space-x-api/",
  plugins: [react()]
})
