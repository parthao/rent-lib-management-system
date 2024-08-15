import httpClient from "../http-user.js";
import apiSecurity from "../Security.jsx";

const secureAPI = apiSecurity.security;

const Expenses = () => {
  return httpClient.get("/api/Bill", secureAPI);
};


export default {
  Expenses,
};
