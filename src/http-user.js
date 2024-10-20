import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5219/",
  headers: {
    "Content-Type": "application/json",
  },
});
