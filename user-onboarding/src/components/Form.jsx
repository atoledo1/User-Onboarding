import * as yup from "yup";

const form = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "Must be at least 3 characters long")
    .required("This is a required field"),

  email: yup
    .string()
    .email("Must be an email")
    .required("This is a required field"),

  password: yup
    .string()
    .trim()
    .min(5, "Must be at least 5 characters long")
    .required("This is a required field"),

  termsOfService: yup
    .boolean()
    .oneOf([true], "Must accept the Terms and Conditions"),
});

export default form;
