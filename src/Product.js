import React from "react";

const Product = ({ name, price, product_image }) => (
  <React.Fragment>
    <img src={product_image} alt={name} className="product__image" />
    <div className="product__details">
      <div>${price}</div>
      <div>{name}</div>
    </div>
  </React.Fragment>
);

export default Product;
