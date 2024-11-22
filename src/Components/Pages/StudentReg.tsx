import React, { useState } from "react";
import InputTextBox from "../MicroComponent/InputTextBox.tsx";
import StudentService from "../../Services/Student.service.tsx";
import { validationRules } from "../../Validation/validationRules.tsx";
import { validateForm } from "../../Validation/validateForm.tsx";
import ImageBox from "../MacroComponent/ImageBox.tsx";
import "../../Interface/StudentProps.tsx";
import Notification from "../MacroComponent/Notification.tsx";

const StudentReg = () => {
  const uploadUrl = process.env.REACT_APP_UPLOAD;
  const defaultImage = process.env.REACT_APP_DEFAULT_IMAGE;

  const [formData, setFormData] = useState<StudentRegProps>({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    address: "",
    age: 0,
    gender: "",
    preparation: "",
    aadhaarNumber: "",
    mobileNumber: "",
    guardianName: "",
    guardianContact: "",
    image: "1727883839419",
  });

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      address: "",
      age: 0,
      gender: "",
      preparation: "",
      aadhaarNumber: "",
      mobileNumber: "",
      guardianName: "",
      guardianContact: "",
      image: "1727883839419", // Reset the image to an empty string or its default value
    });
  };

  // Define validation rules for each field
  const fieldRules = {
    firstName: [validationRules.required],
    lastName: [validationRules.required],
    fatherName: [validationRules.required],
    motherName: [validationRules.required],
    address: [validationRules.required],
    age: [validationRules.required, validationRules.isNumber],
    gender: [validationRules.required],
    aadhaarNumber: [validationRules.required, validationRules.isAadhaar],
    mobileNumber: [validationRules.required, validationRules.isPhoneNumber],
    guardianName: [validationRules.required],
    guardianContact: [validationRules.required, validationRules.isPhoneNumber],
    image: [validationRules.required, validationRules.isImage],
  };
  const [errors, setErrors] = useState<StudentRegProps>({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    address: "",
    age: 0,
    gender: "",
    preparation: "",
    aadhaarNumber: "",
    mobileNumber: "",
    guardianName: "",
    guardianContact: "",
    image: "1727883839419",
  });
  const handleInputChange = (field, value) => {
    if (
      checkWhitespace(value) &&
      (field == "motherName" || field == "fatherName")
    ) {
      console.log("Space");
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  function checkWhitespace(str) {
    return /\s/.test(str);
  }

  const saveStudent = () => {
    // Validate the form

    const validationErrors = validateForm(formData, fieldRules);

    if (Object.keys(validationErrors).length === 0) {
      // If no errors, submit the form
      StudentService.SaveStudent(formData)
        .then((response) => {
          {
            resetForm();
            Notification.Success("Student Saved Successfully");
          }
          debugger;
        })
        .catch((error) => {
          console.error("Error saving student:", error);
        });
    } else {
      // Set errors if validation fails
      Notification.Error("Please fill form Properly");
      setErrors(validationErrors);
      console.error("Error saving student:", validationErrors);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Student Registration</h1>
      <div className="row">
        <div className="col-md-12  d-flex justify-content-end">
          <ImageBox
            url={`${uploadUrl}/student/${defaultImage}.png`}
            onUploadComplete={(newUrl) => {
              console.log("Uploaded image available at:", newUrl);
              setFormData((prevFormData) => ({
                ...prevFormData, // Copy all the previous form data
                image: newUrl, // Update the image field with the new value
              }));
            }}
            required={true}
            error={errors.image} // Pass error to InputTextBox
          ></ImageBox>
        </div>
      </div>

      <div className="row mb-6">
        <div className="col-md-6">
          <InputTextBox
            label="First Name"
            placeholder="Enter First Name"
            value={formData.firstName}
            handleChange={(value) => handleInputChange("firstName", value)}
            type="text"
            required={true}
            error={errors.firstName} // Pass error to InputTextBox
          />
        </div>
        <div className="col-md-6">
          <InputTextBox
            label="Last Name"
            placeholder="Enter Last Name"
            value={formData.lastName}
            handleChange={(value) => handleInputChange("lastName", value)}
            type="text"
            required={true}
            error={errors.lastName} // Pass error to InputTextBox
          />
        </div>
      </div>

      <div className="row mb-6">
        <div className="col-md-6">
          <InputTextBox
            label="Mother Name"
            placeholder="Enter Mother Name"
            value={formData.motherName}
            handleChange={(value) => handleInputChange("motherName", value)}
            type="text"
            required={true}
            error={errors.motherName} // Pass error to InputTextBox
          />
        </div>
        <div className="col-md-6">
          <InputTextBox
            label="Father Name"
            placeholder="Enter Father Name"
            value={formData.fatherName}
            handleChange={(value) => handleInputChange("fatherName", value)}
            type="text"
            required={true}
            error={errors.fatherName} // Pass error to InputTextBox
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <InputTextBox
            label="Address"
            placeholder="Enter Address"
            value={formData.address}
            handleChange={(value) => handleInputChange("address", value)}
            type="text"
            required={true}
            error={errors.address} // Pass error to InputTextBox
          />
        </div>
        <div className="col-md-6">
          <InputTextBox
            label="Age"
            placeholder="Enter Age"
            value={formData.age}
            handleChange={(value) => handleInputChange("age", value)}
            type="number"
            required={true}
            error={errors.age} // Pass error to InputTextBox
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <InputTextBox
            label="Gender"
            placeholder="Enter Gender"
            value={formData.gender}
            handleChange={(value) => handleInputChange("gender", value)}
            required={true}
            error={errors.gender} // Pass error to InputTextBox
          />
        </div>
        <div className="col-md-6">
          <InputTextBox
            label="Aadhaar Number"
            placeholder="Enter Aadhaar Number"
            value={formData.aadhaarNumber}
            handleChange={(value) => handleInputChange("aadhaarNumber", value)}
            required={true}
            error={errors.aadhaarNumber} // Pass error to InputTextBox
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <InputTextBox
            label="Mobile Number"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            handleChange={(value) => handleInputChange("mobileNumber", value)}
            required={true}
            error={errors.mobileNumber} // Pass error to InputTextBox
          />
        </div>
        <div className="col-md-6">
          <InputTextBox
            label="Guardian Name"
            placeholder="Enter Guardian Name"
            value={formData.guardianName}
            handleChange={(value) => handleInputChange("guardianName", value)}
            required={true}
            error={errors.guardianName} // Pass error to InputTextBox
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <InputTextBox
            label="Guardian Contact"
            placeholder="Enter Guardian Contact"
            value={formData.guardianContact}
            handleChange={(value) =>
              handleInputChange("guardianContact", value)
            }
            required={true}
            error={errors.guardianContact} // Pass error to InputTextBox
          />
        </div>
      </div>

      <button onClick={saveStudent} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default StudentReg;
