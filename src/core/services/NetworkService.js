import axios from "axios";

const successRequestFunc = (request) => {
  if (!request.baseURL) {
    request.baseURL = "http://localhost:3000";
  }
  return request;
};

export const failureRequestFunc = (error) => {
  return Promise.reject(error);
};

export const networkService = () => {
  axios.interceptors.request.use(successRequestFunc, failureRequestFunc);
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (axios.isCancel(error)) return;
      return Promise.reject(error);
    }
  );
};
