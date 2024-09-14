import axios from "axios";
const apiUrl: string = import.meta.env.VITE_API_URL || '';
const apiKey: string = import.meta.env.VITE_API_KEY || '';

export default axios.create({
  baseURL: apiUrl,
  params: {
    key: apiKey,
  },
});
