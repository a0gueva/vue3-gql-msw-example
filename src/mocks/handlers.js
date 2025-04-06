import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetProduct', (req, res, ctx) => {
    console.log('[MSW] 🧪 Intercepted GetProduct', req.variables);
    return res(
      ctx.data({
        product: {
          id: req.variables.id,
          name: `Mock Product #${req.variables.id}`
        }
      })
    )
  })
]
