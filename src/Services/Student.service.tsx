import httpClient from "../http-user.js";
import apiSecurity from "../Security.jsx";
import httpUploadClient from "../http-upload.js";

const secureAPI = apiSecurity.security;

const SaveStudent = (data) => {
  return httpClient.post("/api/student", data);
};

const UploadImage = (formData) => {
  return httpUploadClient.post("/upload-image", formData);
};

const GetStudent = () => {
  return httpClient.get("/api/Student/StudentsList");
};

export default {
  SaveStudent,
  UploadImage,
  GetStudent,
};
