import axios from "axios";

export default axios.create({
  baseURL: "http://122.169.42.21:8084/",
  headers: {
    "Content-Type": "application/json",
  },
});
