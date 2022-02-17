import axios from "axios";
import router from "@/router";
import store from "@/store";

const baseUrl = 'http://127.0.0.1:8000/api';

const defaultHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}


export const publicInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        ...defaultHeaders
    }
});

export const privateInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        ...defaultHeaders,
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
})

privateInstance.interceptors.request.use(
    async config => {
        config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

privateInstance.interceptors.response.use(function (response) {
    store.commit("clearValidation");
    store.commit("clearSuccess");
    store.commit("clearError");
    return response;
}, async function (error) {
    store.commit("clearSuccess")
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        localStorage.removeItem("authToken")
        router.push({name: 'login'})
    }
    if (error.response.status === 422) {
        store.commit("setValidation", error.response.data.errors);
    }
    return Promise.reject(error);
});