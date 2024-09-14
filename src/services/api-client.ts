import axios from "axios";
const apiUrl: string = process.env.API_URL || '';
const apiKey: string = process.env.API_KEY || '';

if (!apiUrl || !apiKey) {
  throw new Error('Missing required environment variables');
}

export default axios.create({
  baseURL: apiUrl,
  params: {
    key: apiKey,
  },
});
