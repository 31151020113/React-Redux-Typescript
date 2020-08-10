import { ON_CHANGE_LOGIN_FORM, RESET_FORM_LOGIN } from "./constants";
import { LoginReq } from "../../models/req/login-req";

interface OnChangeFormLogin {
  type: typeof ON_CHANGE_LOGIN_FORM;
  form: LoginReq;
}

interface ResetFormLogin {
  type: typeof RESET_FORM_LOGIN;
}

export type HomeDispatchActionTypes = OnChangeFormLogin | ResetFormLogin;
