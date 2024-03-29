// src/gatsby-plugin-apollo/client.js
import fetch from 'isomorphic-fetch';
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://127.0.0.1:8080/query',
    fetch
  })
});

export default client;
