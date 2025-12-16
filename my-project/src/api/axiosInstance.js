import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://wordpress-1471720-5962383.cloudwaysapps.com/wp-json/custom/v1",
});

export default axiosInstance;