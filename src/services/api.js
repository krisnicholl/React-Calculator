import axios from "axios";
import { API_BASE_URL } from "../components/apiConstants";

export const clearResults = () => {
  return axios.post(`${API_BASE_URL}/clear`);
};

export const calculateResult = (endpoint, a, b) => {
  const url = `${API_BASE_URL}/${endpoint}?a=${a}&b=${b}`;
  return axios.get(url);
};
