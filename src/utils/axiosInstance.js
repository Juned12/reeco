import axios from "axios";

const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' }
})

export default axiosInstance;