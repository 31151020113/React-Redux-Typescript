import { ProductRes } from "../../models/res/product-res";
import { ProductDispatchActionTypes } from "./action-type";
import {
  ON_CHANGE_FORM_PRODUCT,
  RESET_FORM_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "./constants";

const onChangeFormProduct = (form: ProductRes): ProductDispatchActionTypes => ({
  type: ON_CHANGE_FORM_PRODUCT,
  form,
});

const resetFormProduct = (): ProductDispatchActionTypes => ({
  type: RESET_FORM_PRODUCT,
});

const deleteProduct = (id: string): ProductDispatchActionTypes => ({
  type: DELETE_PRODUCT,
  id,
});

const addProduct = (body: ProductRes): ProductDispatchActionTypes => ({
  type: ADD_PRODUCT,
  body,
});

const updateProduct = (body: ProductRes): ProductDispatchActionTypes => ({
  type: UPDATE_PRODUCT,
  body,
});
export default {
  onChangeFormProduct,
  resetFormProduct,
  deleteProduct,
  addProduct,
  updateProduct,
};
