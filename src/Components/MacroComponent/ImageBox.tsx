import React, { useState } from "react";
import "../../css/imagebox.css";

export default function ImageBox({ url }) {
  const [imageUrl, setImageUrl] = useState(url);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="file-input">
        <img
          src={imageUrl}
          alt="Upload Preview"
          style={{ cursor: "pointer", width: "300px", height: "auto" }}
        />
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
}
