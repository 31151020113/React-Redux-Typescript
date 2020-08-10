import { postAsync } from "./../../utils/http-client";
import { AxiosResponse } from "axios";
import { LoginReq } from "../../models/req/login-req";

const URL = "/auth-api/auth";

const loginAsync = (model: LoginReq): Promise<AxiosResponse> => {
  const url = URL + "/login";
  return postAsync(url, model);
};

export default {
  loginAsync,
};
