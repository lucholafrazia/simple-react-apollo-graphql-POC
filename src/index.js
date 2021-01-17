import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index"
  }) // This points to the GraphQL endpoint
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
