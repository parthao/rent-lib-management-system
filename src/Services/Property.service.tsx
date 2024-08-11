import httpClient from "../http-user.js";
import apiSecurity from "../Security.jsx";

const secureAPI = apiSecurity.security;

const PropertyList = () => {
  return httpClient.get("/api/Property", secureAPI);
};


export default {
  PropertyList,
};
