import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAllEmployee } from "../redux/slices/registerSlice";
import "react-toastify/dist/ReactToastify.css";
import FormC from "../components/Form";
import { FormProps } from "../Types/Form";
import { useState } from "react";
import { json } from "stream/consumers";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<any>(null);
  //   const { allUser } = useSelector((state: RootState) => state.register);

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    company: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    department: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    profilePicture: Yup.string().required("Required"),
    joiningDate: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    company: "",
    dob: "",
    department: "",
    mobile: "",
    profilePicture: "",
    joiningDate: "",
    role: "",
  };

  const handleSubmit = (values: FormProps) => {
    console.log("values", values);

    dispatch(registerAllEmployee(values));
    toast.success("Registration successful!");
    navigate("/auth/login");
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<FormProps>["setFieldValue"]
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFieldValue("profilePicture", URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <FormC
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        imagePreview={imagePreview}
        submitText="Register"
      />
    </div>
  );
};

export default Register;