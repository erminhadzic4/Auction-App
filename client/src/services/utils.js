import axios from "axios";
axios.defaults.withCredentials = true;

export async function getCategories() {
  return await axios.get("http://localhost:8000/api/categories");
}

export async function getUsers(data) {
  return await axios.get("http://localhost:8000/api/get-users");
}
