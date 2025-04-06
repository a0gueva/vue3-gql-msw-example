import { test, expect, request } from '@playwright/test'

test('mutates mock response after real GraphQL call', async ({ baseURL }) => {
  const reqContext = await request.newContext()
  const response = await reqContext.post(`${baseURL}/graphql`, {
    data: {
      query: \`
        query GetProduct($id: ID!) {
          product(id: $id) {
            id
            name
          }
        }
      \`,
      variables: { id: "1" }
    }
  })

  const json = await response.json()
  const baseProduct = json.data.product

  const enriched = {
    ...baseProduct,
    price: 49.99,
    injectedBy: 'test'
  }

  console.log('[TEST] Enriched Product:', enriched)

  expect(enriched).toMatchObject({
    name: 'Mock Shoe',
    price: 49.99
  })
})
