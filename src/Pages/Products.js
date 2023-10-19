import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const { data, status } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status === 200) {
        setProducts(data);
      }
    } catch (error) {
      return error;
    }
  };
  // response = {data:[{...}], status}

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row col-md-12">
        {/* product card */}
        {products?.map((product, index) => (
          <ProductCard key={`product-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
