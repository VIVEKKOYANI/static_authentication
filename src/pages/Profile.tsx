import * as Yup from "yup";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import FormC from "../components/Form";
import {
  FormProps,
  WorkspaceFormInterFace,
  EmployeeFormInterFace,
} from "../Types/Form";
import { registerAllEmployee } from "../redux/slices/registerSlice";
import { RootState } from "../redux/store";
import WorkspaceForm from "../Forms/WorkspaceForm";
import EmployeeForm from "../Forms/EmployeeForm";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "../components/NavigationBar";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const [imagePreview, setImagePreview] = useState<any>(null);

  const SignupSchemaForAllUser = Yup.object().shape({
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

  const SignupSchemaForSuperAdmin = Yup.object().shape({
    id: Yup.string().required("Required"),
    profilePicture: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    mobile: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    isActive: Yup.boolean().required("Required"),
    role: Yup.string().required("Required"),
  });

  const SignupSchemaForEmployee = Yup.object().shape({
    id: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    mobile: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    companyname: Yup.string().required("Required"),
    companyaddress: Yup.string().required("Required"),
    experience: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
  });

  const initialValuesAllUser = {
    name: user.name,
    email: user.email,
    password: user.password,
    company: user.company,
    dob: user.dob,
    department: user.department,
    mobile: user.mobile,
    profilePicture: user.profilePicture,
    joiningDate: user.joiningDate,
    role: user.role,
  };

  const initialValuesSuperAdmin = {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    mobile: user.mobile,
    profilePicture: user.profilePicture,
    address: user.address,
    isActive: user.isActive,
    role: user.role,
  };

  const initialValuesEmployee = {
    id: user.id,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    address: user.address,
    companyname: user.companyname,
    companyaddress: user.companyaddress,
    experience: user.experience,
    role: user.role,
  };

  useEffect(() => {
    if (user.profilePicture) {
      setImagePreview(user.profilePicture);
    }
  }, [user]);

  const handleSubmit = (
    values: FormProps | WorkspaceFormInterFace | EmployeeFormInterFace
  ) => {
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
    <div className="min-h-full">
      <Navigation />

      <Header heading="Profile" />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {user.role === "all" && (
            <FormC
              initialValues={initialValuesAllUser}
              validationSchema={SignupSchemaForAllUser}
              onSubmit={handleSubmit}
              handleImageChange={handleImageChange}
              imagePreview={imagePreview}
            />
          )}
          {user.role === "superadmin" && (
            <WorkspaceForm
              initialValues={initialValuesSuperAdmin}
              validationSchema={SignupSchemaForSuperAdmin}
              onSubmit={handleSubmit}
              handleImageChange={handleImageChange}
              imagePreview={imagePreview}
            />
          )}
          {(user.role === "workspace" ||  user.role === "employee") && (
            <EmployeeForm
              initialValues={initialValuesEmployee}
              validationSchema={SignupSchemaForEmployee}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default Profile;