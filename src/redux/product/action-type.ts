import {
  ON_CHANGE_FORM_PRODUCT,
  RESET_FORM_PRODUCT,
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./constants";
import { ProductRes } from "../../models/res/product-res";

interface OnChangeFormProduct {
  type: typeof ON_CHANGE_FORM_PRODUCT;
  form: ProductRes;
}

interface ResetFormProduct {
  type: typeof RESET_FORM_PRODUCT;
}

interface GetProducts {
  type: typeof GET_PRODUCTS;
}

interface AddProduct {
  type: typeof ADD_PRODUCT;
  body: ProductRes;
}

interface UpdateProduct {
  type: typeof UPDATE_PRODUCT;
  body: ProductRes;
}

interface DeleteProduct {
  type: typeof DELETE_PRODUCT;
  id: string;
}

export type ProductDispatchActionTypes =
  | OnChangeFormProduct
  | ResetFormProduct
  | GetProducts
  | UpdateProduct
  | AddProduct
  | DeleteProduct;
