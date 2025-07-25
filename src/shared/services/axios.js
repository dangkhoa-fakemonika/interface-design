import axios from "axios";

export const axiosInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_APP_DATA_URL
    }
);


axiosInstance.interceptors.request.use(
    (config) => {console.log(config)},
    (error) => {console.log(error)}
);

axiosInstance.interceptors.response.use(
    (config) => {console.log(config)},
    (error) => {console.log(error)}
);
