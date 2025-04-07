import { test, expect } from '@playwright/test'

test('renders enriched product via header override', async ({ page }) => {
  await page.route('**/graphql', (route, request) => {
    const headers = {
      ...request.headers(),
      'x-mock-overrides': 'price-override'
    }
    route.continue({ headers })
  })

  await page.goto('http://localhost:4173')
  await expect(page.locator('h1')).toHaveText('Product Info')
  await expect(page.locator('text=99.99')).toBeVisible()
})
