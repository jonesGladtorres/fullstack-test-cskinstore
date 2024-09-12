import axios from "axios";

const baseURL = process.env.NEXT_APP_API_BASE_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL,
  timeout: 8000,
});
