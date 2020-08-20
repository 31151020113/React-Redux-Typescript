import React, { useState, useEffect } from "react";
import "./product.scss";
import { ProductRes } from "../../../models/res/product-res";
import { RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../redux/product/actions";
interface Props {}

const ProductPage: React.FC<Props> = (props) => {
  const productState = (state: RootState) => state.product;
  const { products, reqModel } = useSelector(productState);
  const [listProduct, setProducts] = useState<ProductRes[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(products);
      setLoading(false);
    }, 3000);
  }, [products]);

  return (
    <div className="container product-page">
      <div className="row">
        <div className="col-md-12">Product Page</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table mt-4">
            <div className="td">Name</div>
            <div className="td">Price</div>
            <div className="td">Status</div>
            <div className="td">Action</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="products">
            {isLoading ? (
              <span>Loading.....</span>
            ) : (
              listProduct.map((product) => (
                <div className="product" key={product.id}>
                  <div className="td">{product.name}</div>
                  <div className="td">${product.price}</div>
                  <div className="td">
                    {product.status ? "Active" : "In active"}
                  </div>
                  <div className="action td">
                    <button className="form-control">Edit</button>
                    <button
                      className="form-control"
                      onClick={() =>
                        dispatch(actions.deleteProduct(product.id))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
