import { AxiosResponse } from "axios";

export const authorizationHeader = (): { [index: string]: string } => {
  const token = localStorage.getItem("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export const fileDownloader = (
  response: AxiosResponse<any>,
  fileName: string
) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
};

export const formatCurrency = (money: number, isHaveDollar: boolean = true) => {
  return (
    `${isHaveDollar ? "$" : ""}` +
    money.toLocaleString().split(".")[0] +
    "." +
    money.toFixed(2).split(".")[1]
  );
};

export const convertEnumToString = (enumType: any, value: number) => {
  let str: string | undefined = undefined;
  for (let prop in enumType) {
    if (enumType[prop] === value) str = prop;
  }

  return str;
};
