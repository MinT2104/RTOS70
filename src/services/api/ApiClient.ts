import axios from "axios";

export const ApiClient = axios.create({
    baseURL: "http://localhost:5000/",
});

ApiClient.defaults.headers.common = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
ApiClient.interceptors.request.use(
    (config) => {
        config.headers['Access-Control-Allow-Origin'] = '*'; // Set CORS headers
        return config;
    },
    (error) => Promise.reject(error)
);


ApiClient.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
)

ApiClient.interceptors.response.use(
    (config) => config,
    (error) => Promise.reject(error)
)
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
