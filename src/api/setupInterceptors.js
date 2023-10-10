import axiosInstance from "./baseApi";

const getToken = function () {
  return localStorage.getItem("AccessToken");
};

const setup = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== "/authen/api/Authen/Login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post(
              "/authen/api/Authen/RefreshToken",
              {
                AccessToken: localStorage.getItem("AccessToken"),
                RefreshToken: localStorage.getItem("RefreshToken"),
              }
            );

            const { AccessToken } = rs.data;

            localStorage.setItem("AccessToken", rs.data.AccessToken);
            localStorage.setItem("RefreshToken", rs.data.RefreshToken);

            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;
