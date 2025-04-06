import { createApp } from 'vue'
import App from './App.vue'

if (import.meta.env.DEV) {
  import('./mocks/browser').then(({ worker }) => {
    worker.start({ onUnhandledRequest: 'bypass' })
  })
}

createApp(App).mount('#app')
