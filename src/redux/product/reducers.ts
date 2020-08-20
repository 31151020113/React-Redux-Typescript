import { ProductRes, initialProduct } from "../../models/res/product-res";
import { ProductDispatchActionTypes } from "./action-type";
import {
  ON_CHANGE_FORM_PRODUCT,
  RESET_FORM_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./constants";
import { v4 as uuidv4 } from "uuid";

export interface ProductState {
  products: ProductRes[];
  reqModel: ProductRes;
}

const initialState: ProductState = {
  products: initialProduct,
  reqModel: {
    id: "",
    name: "",
    price: 0,
    status: false,
  },
};

const reducer = (
  state = initialState,
  action: ProductDispatchActionTypes
): ProductState => {
  switch (action.type) {
    case ON_CHANGE_FORM_PRODUCT:
      return {
        ...state,
        reqModel: {
          ...state.reqModel,
          ...action.form,
        },
      };
    case RESET_FORM_PRODUCT:
      return {
        ...state,
        reqModel: initialState.reqModel,
      };
    case ADD_PRODUCT:
      const model = { ...action.body, id: uuidv4() };
      return {
        ...state,
        products: [...state.products, model],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.map((item) => {
            if (item.id === action.body.id) item = action.body;
            return item;
          }),
        ],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter((item) => item.id !== action.id)],
      };
    default:
      return state;
  }
};

export default reducer;
