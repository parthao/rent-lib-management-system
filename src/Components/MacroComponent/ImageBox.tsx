import React, { useState } from "react";
import "../../css/imagebox.css";
import StudentService from "../../Services/Student.service.tsx";

export default function ImageBox({ url }) {
  const [imageUrl, setImageUrl] = useState(url);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);

      const formData = new FormData(); // Create a FormData object
      formData.append("image", file); // Append the image file, just like in the curl command

      // Upload the image
      StudentService.UploadImage(formData)
        .then((response) => {
          setUploadMessage("Image uploaded successfully");
          console.log("Upload success:", response.data);
        })
        .catch((error) => {
          debugger;
          setUploadMessage("Failed to upload image");
          console.error("Upload error:", error);
        });
    }
  };

  return (
    <div>
      <label htmlFor="file-input">
        <img
          className="imgarrange"
          src={imageUrl}
          alt="Upload Preview"
          style={{ cursor: "pointer" }}
        />
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        className="imgarrange"
        onChange={handleImageChange}
      />
    </div>
  );
}
