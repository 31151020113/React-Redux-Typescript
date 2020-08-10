import actions from "./actions";
import { Dispatch } from "redux";
import { HomeDispatchActionTypes } from "./action-type";
import api from "./api";

const loginAsync = () => async (
  dispatch: Dispatch<HomeDispatchActionTypes>,
  getState: any
) => {
  const { loginReq } = getState().home;
  const res = await api.loginAsync(loginReq);
  if (res.data) {
    console.log("full name: ", res.data.fullName);
    dispatch(actions.resetFormLogin());
  }
};

export default {
  loginAsync,
};
