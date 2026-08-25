import axios from "axios";

let baseURL = process.env.REACT_APP_BASEURL;

if (baseURL && !baseURL.includes('/api')) {
  baseURL = baseURL.replace(/\/$/, '') + '/api/v1';
}

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
