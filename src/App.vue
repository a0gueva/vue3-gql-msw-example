<template>
  <div>
    <h1>Mocked Product</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <p v-if="data">Product: {{ data.product.name }}</p>
  </div>
</template>

<script setup>
import { useQuery } from '@apollo/client/core'
import { provideApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { GET_PRODUCT } from './queries/getProduct'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

provideApolloClient(client)

const { result: data, loading, error } = useQuery(GET_PRODUCT, { id: "1" })
</script>
