<template>
  <div>
    <h1>Product Info</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <p v-if="data">Name: {{ data.product.name }} - Price: {{ data.product.price }}</p>
  </div>
</template>

<script setup>
import { useQuery, provideApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { GET_PRODUCT } from './queries/getProduct'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: '/graphql',
    headers: {
      'x-mock-overrides': 'price-override'
    }
  })
})

provideApolloClient(client)

const { result: data, loading, error } = useQuery(GET_PRODUCT, { id: "1" })
</script>
