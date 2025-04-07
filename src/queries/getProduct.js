import { gql } from '@apollo/client/core'

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      price
    }
  }
`
