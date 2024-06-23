import * as Yup from "yup";

export const SignupSchemaForSuperAdmin = Yup.object().shape({
  id: Yup.string().required("Required"),
  profilePicture: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  mobile: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  role: Yup.string().notRequired(),
});

export const signupSchemaForWorkSpace = Yup.object().shape({
  id: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  mobile: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  companyname: Yup.string().required("Required"),
  companyaddress: Yup.string().required("Required"),
  experience: Yup.string().required("Required"),
  role: Yup.string().notRequired(),
});