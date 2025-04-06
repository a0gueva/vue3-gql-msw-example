import { graphql } from 'msw'
import { loadMockProduct } from './utils/loadMockProduct'

export const handlers = [
  graphql.query('GetProduct', async (req, res, ctx) => {
    const { id } = req.variables
    const base = await loadMockProduct(id)
    return res(ctx.data({ product: base }))
  })
]
