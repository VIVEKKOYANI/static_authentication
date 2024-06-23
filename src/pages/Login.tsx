import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allUser } = useSelector((state: RootState) => state.register);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Mock login
      let userLogin: any = {}; // Mock user role, change as needed
      let auth = false;
      allUser.forEach((item) => {
        if (item.email === values.email && item.password === values.password) {
          auth = true;
          userLogin = { ...item };
        }
      });
      if (auth) {
        toast.success("Login successful");
        if (userLogin.role === "superadmin" || userLogin.role === "employee") {
          dispatch(login(userLogin));
          navigate("/");
        }
        if (userLogin.role === "workspace") {
          dispatch(login(userLogin));
          navigate("/employee");
        }
        auth = false;
      } else {
        toast.error("Your email and password is not match");
      }
    },
  });

  console.log("allUser", allUser);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded shadow-md"
      >
        <h1 className="text-2xl mb-4">Login</h1>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...formik.getFieldProps("email")}
            className="border p-2 w-full"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...formik.getFieldProps("password")}
            className="border p-2 w-full"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;