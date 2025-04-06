import { defineConfig } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'npm run preview',
    port: 4173,
    timeout: 30000,
    reuseExistingServer: !process.env.CI
  },
  use: {
    baseURL: 'http://localhost:4173'
  }
})
