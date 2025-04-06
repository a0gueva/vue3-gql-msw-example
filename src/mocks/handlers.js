import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetProduct', (req, res, ctx) => {
    const { id } = req.variables
    return res(
      ctx.data({
        product: {
          id,
          name: `Mock Product #${id}`
        }
      })
    )
  })
]
