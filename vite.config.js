import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "karthik-17",
    project: "javascript-nextjs"
  }), sentryVitePlugin({
    org: "karthik-17",
    project: "javascript-nextjs"
  })],

  build: {
    sourcemap: true
  }
})