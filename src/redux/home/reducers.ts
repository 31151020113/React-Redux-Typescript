import { ON_CHANGE_LOGIN_FORM, RESET_FORM_LOGIN } from "./constants";
import { LoginReq } from "../../models/req/login-req";
import { HomeDispatchActionTypes } from "./action-type";

export interface HomeState {
  loginReq: LoginReq;
}

const initialState: HomeState = {
  loginReq: { userName: "", password: "" },
};
const reduce = (
  state = initialState,
  action: HomeDispatchActionTypes
): HomeState => {
  switch (action.type) {
    case ON_CHANGE_LOGIN_FORM:
      return {
        ...state,
        loginReq: {
          ...state.loginReq,
          ...action.form,
        },
      };
    case RESET_FORM_LOGIN:
      return {
        ...state,
        loginReq: { userName: "", password: "" },
      };
    default:
      return state;
  }
};

export default reduce;
