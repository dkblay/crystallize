import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Products from "./Products";

const client = new ApolloClient({
  uri: "https://api.crystallize.com/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <Products />
    </div>
  </ApolloProvider>
);

export default App;
