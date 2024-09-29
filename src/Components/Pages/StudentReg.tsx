import React, { useState } from "react";
import InputTextBox from "../MicroComponent/InputTextBox.tsx";
import StudentService from "../../Services/Student.service.tsx";

const StudentReg = () => {
  const [formData, setFormData] = useState<StudentRegProps>({
    firstName: "",
    lastName: "",
    address: "",
    age: 0,
    gender: "",
    preparation: "",
    aadhaarNumber: "",
    mobileNumber: "",
    guardianName: "",
    guardianContact: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const saveStudent = () => {
    console.log(formData);
    StudentService.SaveStudent(formData)
      .then((response) => {
        console.log("Student saved successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error saving student:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student Registration</h1>

      <div className="row mb-3">
        <div className="col-md-6">
          <InputTextBox
            label="First Name"
            placeholder="Enter First Name"
            value={formData.firstName}
            handleChange={(value) => handleInputChange("firstName", value)}
            type="text"
            required={true}
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
          />
        </div>
        <div className="col-md-6">
          <InputTextBox
            label="Preparation for"
            placeholder="Enter Preparation"
            value={formData.preparation}
            handleChange={(value) => handleInputChange("preparation", value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <InputTextBox
            label="Aadhaar Number"
            placeholder="Enter Aadhaar Number"
            value={formData.aadhaarNumber}
            handleChange={(value) => handleInputChange("aadhaarNumber", value)}
            required={true}
          />
        </div>
        <div className="col-md-6">
          <InputTextBox
            label="Mobile Number"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            handleChange={(value) => handleInputChange("mobileNumber", value)}
            required={true}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <InputTextBox
            label="Guardian Name"
            placeholder="Enter Guardian Name"
            value={formData.guardianName}
            handleChange={(value) => handleInputChange("guardianName", value)}
            required={true}
          />
        </div>
        <div className="col-md-6">
          <InputTextBox
            label="Guardian Contact"
            placeholder="Enter Guardian Contact"
            value={formData.guardianContact}
            handleChange={(value) =>
              handleInputChange("guardianContact", value)
            }
            required={true}
          />
        </div>
      </div>
      <button onClick={() => saveStudent()}>Click</button>
    </div>
  );
};

export default StudentReg;
