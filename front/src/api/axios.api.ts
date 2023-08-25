import axios from "axios";
import { getTokenFromLocalstorage } from "../helpers/localstorage.helper";

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    Authorization: 'Bearer ' + getTokenFromLocalstorage() || '',
  }
})