const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.aadhar = !isEmpty(data.aadhar) ? data.aadhar : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.farmerid = !isEmpty(data.farmerid) ? data.farmerid : "";
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
//phone number checks
  if(Validator.isEmpty(data.phone)){
    errors.phone = "Phone number is required";
  }
//aadhar number checks
  if(Validator.isEmpty(data.aadhar)){
    errors.aadhar = "aadhar number is required";
  }
//address checks 
  if(Validator.isEmpty(data.address)){
    errors.address = "address field is required";
  }
//farmer id checks
  if(Validator.isEmpty(data.farmerid)){
    errors.farmerid = "farmer id is required";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
