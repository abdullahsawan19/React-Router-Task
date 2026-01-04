import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./data";

const ProductDetails = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const product = products.find((p) => p.id === parseInt(id));
  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <button onClick={() => Navigate(-1)}>Back</button>
    </div>
  );
};

export default ProductDetails;
