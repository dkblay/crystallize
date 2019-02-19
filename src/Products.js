import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import withProduct from "./withProduct";
import Product from "./Product";

const getProducts = gql`
  {
    catalogue(url: "/illustrations", tenantID: "demo") {
      name
      id
      link
      content_fields
      children {
        link
        name
        product {
          id
          product_image
          price
          price_from
          link
          name
        }
      }
    }
  }
`;
const Products = () => (
  <Query query={getProducts}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.catalogue.children.map(({ product: { id, ...rest } }) => {
        const Wrapped = withProduct(Product, rest);
        return <Wrapped key={id} />;
      });
    }}
  </Query>
);

export default Products;
