import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
    },
});

api.interceptors.request.use(

    (config) => {
        const storedToken = localStorage.getItem('token');
        const token = storedToken ? JSON.parse(storedToken) : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    // (error) => {
    //     return Promise.reject(error.response.data);
    // }
);

// api.interceptors.response.use((res) => {
//     return res;
// }, async (err) => {
//     if (err?.response?.status === 401) {
//         localStorage.removeItem('token')
//         window.location.reload()
//     }
//     return Promise.reject(err?.response?.data);
// }
// );