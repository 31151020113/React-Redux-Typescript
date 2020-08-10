import { ON_CHANGE_LOGIN_FORM, RESET_FORM_LOGIN } from "./constants";
import { LoginReq } from "../../models/req/login-req";
import { HomeDispatchActionTypes } from "./action-type";

const onChangeFormLogin = (form: LoginReq): HomeDispatchActionTypes => ({
  type: ON_CHANGE_LOGIN_FORM,
  form,
});

const resetFormLogin = (): HomeDispatchActionTypes => ({
  type: RESET_FORM_LOGIN,
});
export default {
  onChangeFormLogin,
  resetFormLogin,
};
