import { createApp } from 'vue'
import App from './App.vue'

async function bootstrap() {
  const { worker } = await import('./mocks/browser')
  await worker.start({
    onUnhandledRequest: 'bypass'
  })
  console.log('[MSW] ✅ Mock Service Worker started')

  createApp(App).mount('#app')
}

bootstrap()
