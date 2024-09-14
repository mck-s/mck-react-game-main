import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89547d0e391d476cbbb7d1df23892c19",
  },
});
