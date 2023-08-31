import axios from "axios";


export const axiosAuth = axios.create({
  baseURL: "http://localhost:1337/api/"
})