import axios, { AxiosInstance, AxiosResponse } from "axios";
import HttpStatus from "http-status-codes";
import qs from "qs";
import { toast } from "react-toastify";
// import { toggleLoading } from "../components/providers/withAppProvider";
import { authorizationHeader } from "./helper";

const axiosInstance = (handleErrorAutomatic: boolean): AxiosInstance => {
  //   toggleLoading(true);
  const instance = axios.create({
    baseURL: "https://taskkap-sit-api.futurify.io:5555",
    headers: Object.assign({}, authorizationHeader()),
  });

  instance.interceptors.response.use(
    (response) => {
      //   toggleLoading(false);
      return response;
    },
    (error) => {
      //   toggleLoading(false);
      let errorMessage = "";
      if (error.response) {
        let status = error.response.status;
        // when UnAuthorize
        if (status === HttpStatus.UNAUTHORIZED) {
          handleUnAuthorize();
        }
      }

      if (error.message && error.message === "Network Error") {
        errorMessage = "No internet connection";
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.Message
      ) {
        const code = error.response.data.Code;
        const message = error.response.data.Message; // Get error message from translation file or default
        // when system return code Unauthorized
        if (code === "Unauthorized") {
          handleUnAuthorize();
        }
        errorMessage = message;
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.errors
      ) {
        const errors: { [key: string]: string[] } = error.response.data.errors;
        const serverError = Object.values(errors).reduce((prev, curr) => [
          ...prev,
          ...curr,
        ]);
        errorMessage = serverError.join(" ");
      } else {
        errorMessage = error + ""; // cast to string type
      }
      // show error
      if (
        handleErrorAutomatic &&
        errorMessage !== "Error: Request failed with status code 401"
      ) {
        // publishMessage(errorMessage);
        toast.error(errorMessage, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      return Promise.reject(error);
    }
  );
  return instance;
};

export const getAsync = (
  url: string,
  params?: { [key: string]: any },
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  if (params?.hasOwnProperty("keyword")) {
    params.keyword = params.keyword.trim();
  }
  return axiosInstance(handleErrorAutomatic).get(url, {
    params: params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  });
};

export const postAsync = (
  url: string,
  json: object,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic).post(url, json);
};

export const putAsync = (
  url: string,
  json?: object,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic).put(url, json);
};

export const deleteAsync = (
  url: string,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic).delete(url);
};

export const downloadAsync = (
  url: string,
  params?: object
): Promise<AxiosResponse> => {
  //   toggleLoading(true);
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: Object.assign({}, authorizationHeader()),
    responseType: "blob",
  });
  return instance
    .get(url, { params: params })
    .finally(() => /*toggleLoading(false)*/ {});
};

export const postWithFormFileAsync = (url: string, file: File, model?: any) => {
  const formData = new FormData();
  formData.append(file.name, file);
  formData.append("folder", model["folder"]);
  for (const key in model) {
    if (model.hasOwnProperty(key)) {
      formData.append(key, model[key]);
    }
  }
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: Object.assign(
      { "content-Type": "multipart/form-data" },
      authorizationHeader()
    ),
  });

  return instance.post(url, formData);
};

export const putWithFormFileAsync = (url: string, file: File) => {
  // const formData = new FormData();
  // formData.append(file.name, file);

  // const instance = axios.create({
  //   baseURL: BASE_URL,
  //   headers: Object.assign(
  //     { "Access-Control-Allow-Origin": "*" },
  //     { "content-Type": "application/octet-stream" },
  //     authorizationHeader()
  //   ),
  // });

  // return instance.put(url, formData);
  return axios.put(url, file, {
    headers: { "Content-Type": "application/octet-stream" },
  });
};
function handleUnAuthorize() {
  localStorage.clear();
  sessionStorage.clear();
  // redirect to sign in page
  if (window.location.href.indexOf("/register") === -1) {
    // not register page
    window.location.href = "/login";
  }
}
