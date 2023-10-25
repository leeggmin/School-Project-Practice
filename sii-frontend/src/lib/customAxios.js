import axios from "axios";
import CONFIG from "../config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.server}`,
  headers: {},
});
