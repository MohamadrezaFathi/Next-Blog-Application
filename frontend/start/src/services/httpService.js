
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const app = axios.create({
  baseURL,
  withCredentials: true,
});

const refreshClient = axios.create({
  baseURL,
  withCredentials: true,
});

app.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalConfig = error.config;

    if (
      error.response?.status !== 401 ||
      !originalConfig ||
      originalConfig._retry ||
      originalConfig.url?.includes("/user/refresh-token")
    ) {
      return Promise.reject(error);
    }

    originalConfig._retry = true;

    try {
      await refreshClient.get("/user/refresh-token");
      return app(originalConfig);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  }
);

const http = {
  get: (...args) => app.get(...args),
  post: (...args) => app.post(...args),
  delete: (...args) => app.delete(...args),
  put: (...args) => app.put(...args),
  patch: (...args) => app.patch(...args),
};

export default http;
