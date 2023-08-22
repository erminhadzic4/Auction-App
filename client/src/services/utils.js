import axios from "axios";
axios.defaults.withCredentials = true;
const baseURL = process.env.REACT_APP_BASE_URL;

export async function getCategories() {
  return await axios.get(`${baseURL}/api/categories`);
}

export async function getUsers() {
  return await axios.get(`${baseURL}/api/get-users`);
}

export const getProducts = (sortOrder) => {
  return axios.get(`${baseURL}/api/products?sort=${sortOrder}`);
};

export const getProductDetails = (data) => {
  return axios.get(`${baseURL}/api/products/${data}`);
};

export const getBidsForProduct = (productId) => {
  return axios.get(`${baseURL}/api/products/${productId}/bids`);
};
