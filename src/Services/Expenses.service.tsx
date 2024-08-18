import httpClient from "../http-user.js";
import apiSecurity from "../Security.jsx";

const secureAPI = apiSecurity.security;

const ExpensesBill = () => {
  return httpClient.get("/api/Bill/GetAllBillWithProperties", secureAPI);
};



export default {
  ExpensesBill,
};
