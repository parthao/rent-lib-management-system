// validateForm.ts
export const validateForm = (formData, fieldRules) => {
  const errors = {};

  Object.keys(fieldRules).forEach((field) => {
    const value = formData[field];
    const rules = fieldRules[field];

    for (let rule of rules) {
      const error = rule(value);
      if (error) {
        errors[field] = error;
        break; // Stop at the first validation error
      }
    }
  });

  return errors;
};
