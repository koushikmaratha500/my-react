import React from "react";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="card" style={{ width: "17rem" }}>
      <img
        src={product.image}
        className="card-img-top image-responsive"
        style={{ height: "17rem" }}
        alt="..."
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            height: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </h5>
        <p
          className="card-text"
          style={{
            height: "40px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.description}
        </p>
        <p>₹{product.price}</p>
        <p>
          Rating: {product?.rating?.rate}({product.rating.count})
        </p>
        <a href="#" className="btn btn-primary">
          Buy now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
