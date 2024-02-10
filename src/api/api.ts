import axios, {AxiosRequestConfig} from 'axios';
import ENDPOINTS from './endpoints';

const axiosInstance = axios.create();

export const Api = {
  get: async (path: ENDPOINTS, body = {}) => {
    try {
      let response = await axiosInstance.get(path, body);
      return response;
    } catch (er) {
      return false;
    }
  },
  post: async (
    path: ENDPOINTS,
    body: any,
    options: AxiosRequestConfig = {},
  ) => {
    try {
      let response = await axiosInstance.post(path, body, options);
      return response;
    } catch (er) {
      return false;
    }
  },
  put: async (path: ENDPOINTS, body: any, options: AxiosRequestConfig = {}) => {
    try {
      let response = await axiosInstance.put(path, body, options);
      return response;
    } catch (er) {
      return false;
    }
  },
};
