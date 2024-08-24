import httpClient from "../http-user.js";
import apiSecurity from "../Security.jsx";

const secureAPI = apiSecurity.security;

const PropertyList = () => {
  return httpClient.get("/api/Property/all", secureAPI);
};

const PropertyWithRoomsList = () => {
  return httpClient.get("/api/Property/all-with-rooms", secureAPI);
};

export default {
  PropertyList,
  PropertyWithRoomsList,
};
