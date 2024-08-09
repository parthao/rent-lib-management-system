import httpClient from "../http-user";
import apiSecurity from "../Security.jsx";

const secureAPI = apiSecurity.security;

const UserList = () => {
  return httpClient.get("/api/User", secureAPI);
};


export default {
  UserList,
};
