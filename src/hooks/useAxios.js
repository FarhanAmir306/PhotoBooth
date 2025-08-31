/* eslint-disable no-useless-catch */
import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";

export default function useAxios() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // request interceptor

    const requestInterceptors = api.interceptors.request.use(
      (config) => {
        console.log("Request Config", config);
        const accessToken = auth?.accessToken;
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptors = api.interceptors.response.use(
      (response) => response,

      async (error) => {
        const orginalRequest = error.config;
        console.log("orginalRequstResponse", orginalRequest);

        if (error.response.status === 401 && !orginalRequest._retry) {
          orginalRequest._retry = true;

          try {
            
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );
            const { token } = response.data;
            console.log("NewRetryToken--", token);
            setAuth({ ...auth, accessToken: token });

            orginalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(orginalRequest);
          } catch (error) {
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptors);
      api.interceptors.response.eject(responseInterceptors);
    };
  }, [auth.accessToken]);

  return { api };
}
