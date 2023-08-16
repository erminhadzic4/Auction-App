import axios from "axios";
axios.defaults.withCredentials = true;
const baseURL = process.env.REACT_APP_BASE_URL;

export async function onRegistration(data) {
  return await axios.post(`${baseURL}/api/register`, data);
}

export async function onLogin(data) {
  return await axios.post(`${baseURL}/api/login`, data);
}

export async function onLogout() {
  return await axios.get(`${baseURL}/api/logout`);
}

export async function fetchProtectedInfo(data) {
  return await axios.get(`${baseURL}/api/protected`);
}

export async function getUserInfo(data) {
  return await axios.get(`${baseURL}/api/get-users`);
}
