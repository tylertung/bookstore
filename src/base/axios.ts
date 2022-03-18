import axios from 'axios';

import { TOKEN_KEY, RESPONSE_STATUS } from '../constant/common';
import * as urls from '../constant/urlRequest';

export const axiosInstance = axios.create({
  baseURL: `${urls.baseUrl}`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const header = token ? { Authorization: `Bearer ${token} ` } : {};

    return {
      ...config,
      headers: {
        ...config.headers,
        ...header,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  ({ data }) => {
    return { data };
  },
  ({ response }) => {
    const status = { reponse_status: response?.status };
    const error =
      response?.data && response?.status !== RESPONSE_STATUS.InternalError
        ? { ...response.data, ...status }
        : { message: "There's something wrong ! Please try again", ...status };
    return Promise.reject(error);
  }
);

export default axiosInstance;
