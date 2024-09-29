import httpClient from "../http-user.js";
import apiSecurity from "../Security.jsx";

const secureAPI = apiSecurity.security;

const SaveStudent = (data) => {
  return httpClient.post("/api/student", data);
};

export default {
  SaveStudent,
};
