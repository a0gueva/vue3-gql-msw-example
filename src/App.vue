<template>
  <div>
    <h1>Product Info</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <p v-if="data">
      Name: {{ data.product.name }}<br />
      ID: {{ data.product.id }}
    </p>
  </div>
</template>

<script setup>
import { useQuery, provideApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { GET_PRODUCT } from './queries/getProduct'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

provideApolloClient(client)

const { result: data, loading, error } = useQuery(GET_PRODUCT, { id: "1" })
</script>
