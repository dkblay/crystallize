import React from "react";

const withProduct = (Product, data) => props => (
  <div className="product">
    <Product {...data} {...props} />
  </div>
);
export default withProduct;
