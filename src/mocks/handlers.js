import { graphql } from 'msw'
import { loadMockProduct } from './utils/loadMockProduct'

export const handlers = [
  graphql.query('GetProduct', async (req, res, ctx) => {
    const { id } = req.variables
    const base = await loadMockProduct(id)
    const overrideKey = req.headers.get('x-mock-overrides')
    let overrides = {}

    if (overrideKey === 'price-override') {
      overrides = { price: 99.99, injectedBy: 'header' }
    }

    return res(ctx.data({ product: { ...base, ...overrides } }))
  })
]
