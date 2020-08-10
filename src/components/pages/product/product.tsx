import React from "react";
import "./product.scss";

interface Props {}

const ProductPage: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">Product Page</div>
      </div>
    </div>
  );
};

export default ProductPage;
