import axios from "axios";
axios.defaults.withCredentials = true;
const baseURL = process.env.REACT_APP_BASE_URL;

export async function getCategories() {
  return await axios.get(`${baseURL}/api/categories`);
}

export async function getUsers(data) {
  return await axios.get(`${baseURL}/api/get-users`);
}

export const getProducts = (sortOrder) => {
  return axios.get(`${baseURL}/api/products?sort=${sortOrder}`);
};
