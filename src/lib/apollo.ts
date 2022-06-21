import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohxaab049r01xtge8n1qid/master',
  cache: new InMemoryCache()
})