import { createApp } from 'vue'
import App from './App.vue'

import('./mocks/browser').then(({ worker }) => {
  worker.start({ onUnhandledRequest: 'bypass' }).then(() => {
    console.log('[MSW] ✅ Service Worker started')
    createApp(App).mount('#app')
  })
})
