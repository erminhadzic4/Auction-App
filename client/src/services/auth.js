import axios from "axios";
axios.defaults.withCredentials = true;

export async function onRegistration(data) {
  return await axios.post("http://localhost:8000/api/register", data);
}

export async function onLogin(data) {
  return await axios.post("http://localhost:8000/api/login", data);
}

export async function onLogout() {
  return await axios.get("http://localhost:8000/api/logout");
}

export async function fetchProtectedInfo(data) {
  return await axios.get("http://localhost:8000/api/protected");
}

export async function getUserInfo(data) {
  return await axios.get("http://localhost:8000/api/get-users");
}
