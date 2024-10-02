// validationRules.ts
export const validationRules = {
  required: (value) => (value ? "" : "This field is required"),
  minLength: (min) => (value) =>
    value.length >= min ? "" : `Must be at least ${min} characters long`,
  maxLength: (max) => (value) =>
    value.length <= max ? "" : `Must be no more than ${max} characters`,
  isNumber: (value) => (!isNaN(value) ? "" : "Must be a number"),
  isEmail: (value) =>
    /^\S+@\S+\.\S+$/.test(value) ? "" : "Must be a valid email address",
  isAadhaar: (value) =>
    /^[2-9]{1}[0-9]{11}$/.test(value) ? "" : "Must be a valid Aadhaar number",
  isPhoneNumber: (value) =>
    /^[0-9]{10}$/.test(value) ? "" : "Must be a 10-digit phone number",
  isImage: (value) =>
    value != "1727883839419" ? "" : "Please enter Student Image",
};
