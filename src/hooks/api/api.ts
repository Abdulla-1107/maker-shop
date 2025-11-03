import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mahinadolls.uz",
});

export default api;
