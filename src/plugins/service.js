import axios from "axios";

const service = axios.create({
  timeout: 7000, // 请求超时时间
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

// 添加请求拦截器
service.interceptors.request.use(config => {
  return config;
});

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
