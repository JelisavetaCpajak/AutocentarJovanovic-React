import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:6499/api/`,
});

export default instance;
