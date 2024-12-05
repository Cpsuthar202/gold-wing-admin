import { ILoginSchemaErr, IRegistrationSchema } from "@/store/reducers/auth/type";

// Updated regular expressions
export const emailRegex = /^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,})+$/;

export const validateFields = (data: IRegistrationSchema) => {
  const err: ILoginSchemaErr = {};
  let isValid = true;

  // name validation
  if (!data?.full_name) {
    err.full_name = "name is required";
    isValid = false;
  }

  // Email validation
  // if (!data?.email) {
  //   err.email = "Email is required";
  //   isValid = false;
  // } else if (!emailRegex.test(data.email ?? "")) {
  //   err.email = "Please enter a valid email";
  //   isValid = false;
  // }

  // phone number validation
  if (!data?.phone_number) {
    err.phone_number = "Number is required";
    isValid = false;
  } else if (data.phone_number.length < 10) {
    err.phone_number = "Please enter a valid Number";
    isValid = false;
  }

  // Password validation
  if (!data?.password) {
    err.password = "Password is required";
    isValid = false;
  } else {
    // Check each condition separately
    if (data.password.length < 8) {
      err.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!/[A-Z]/.test(data.password)) {
      err.password = "Password must include one uppercase letter";
      isValid = false;
    } else if (!/[a-z]/.test(data.password)) {
      err.password = "Password must include one lowercase letter";
      isValid = false;
    } else if (!/\d/.test(data.password)) {
      err.password = "Password must include one number";
      isValid = false;
    } else if (!/[!@#$%^&*]/.test(data.password)) {
      err.password = "Password must include one special character";
      isValid = false;
    }
  }

  return { isValid, err };
};
