import * as Yup from "yup";

export const validationMessages = {
  email: {
    required: "Email is required",
    invalid: "Please enter a valid email address",
  },
  password: {
    required: "Password is required",
    minLength: "Password must be at least 8 characters",
  },
  accessCode: {
    required: "Access code is required",
    minLength: "Access code must be at least 6 characters",
  },
  confirmPassword: {
    required: "Please confirm your password",
    mismatch: "Passwords do not match",
  },
  firstName: {
    required: "First name is required",
    minLength: "First name must be at least 2 characters",
    maxLength: "First name must be at most 30 characters",
    invalidChars: "First name must contain only letters and spaces",
  },
  lastName: {
    required: "Last name is required",
    minLength: "Last name must be at least 2 characters",
    maxLength: "Last name must be at most 30 characters",
    invalidChars: "Last name must contain only letters and spaces",
  },
  newPassword: {
    required: "New password is required",
    minLength: "New password must be at least 8 characters",
    maxLength: "New password must be at most 20 characters",
    invalidChars:
      "New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  },

  addressTitle: {
    required: "Address title is required",
  },
  addressLine1: {
    required: "Address Line 1 is required",
  },
  addressLine2: {
    required: "Address Line 2 is required",
  },
  city: {
    required: "City is required",
  },
  state: {
    required: "State is required",
  },
  zipCode: {
    required: "ZIP code is required",
    invalid: "Please enter a valid ZIP code",
  },
  mobilePhone: {
    required: "Mobile phone number is required",
    invalid: "Please enter a valid mobile phone number",
  },
  petName: {
    required: "Pet name is required",
  },
  ownerFirstName: {
    required: "Owner first name is required",
    minLength: "First name must be at least 2 characters",
    maxLength: "First name must be at most 30 characters",
    invalidChars: "First name must contain only letters",
  },
  ownerLastName: {
    required: "Owner last name is required",
    minLength: "Last name must be at least 2 characters",
    maxLength: "Last name must be at most 30 characters",
    invalidChars: "Last name must contain only letters",
  },
  petDOB: {
    required: "Pet date of birth is required",
    invalid: "Please enter a valid date of birth (mm/dd/yyyy)",
  },
  petType: {
    required: "Pet type is required",
  },
  petWeight: {
    invalid: "Please enter a valid pet weight",
  },
  clinicName: {
    required: "Clinic/Hospital name is required",
  },
  streetAddress: {
    required: "Street address is required",
  },
  city: {
    required: "City is required",
  },
  state: {
    required: "State is required",
  },
  zipCode: {
    required: "ZIP code is required",
    invalid: "Please enter a valid ZIP code",
  },
  phoneNumber: {
    required: "Phone number is required",
    invalid: "Please enter a valid phone number",
  },
  faxNumber: {
    invalid: "Please enter a valid fax number",
  },
  cardNumber: {
    required: "Card number is required",
    invalid: "Please enter a valid 16-digit card number",
  },
  expirationDate: {
    required: "Expiry date is required",
    invalid: "Please enter a valid expiration date in the format MM/YY",
  },
  cvv: {
    required: "CVV is required",
    invalid: "Please enter a valid CVV",
  },
};

export const firstNameRegex = /^[a-zA-Z\s]+$/;
export const lastNameRegex = /^[a-zA-Z\s]+$/;
export const newPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,20}$/;
