import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { ToastContainer } from "react-toastify";
import { WorkspaceFormInterFace } from "../Types/Form";

interface WorkspaceProps {
  initialValues: WorkspaceFormInterFace;
  validationSchema: Yup.ObjectSchema<WorkspaceFormInterFace>;
  onSubmit: (values: WorkspaceFormInterFace) => void;
  submitText?: string;
  imagePreview: any;
  handleImageChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<WorkspaceFormInterFace>["setFieldValue"]
  ) => void;
}

function WorkspaceForm({
  initialValues,
  validationSchema,
  onSubmit,
  imagePreview,
  submitText,
  handleImageChange,
}: WorkspaceProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="bg-white p-6 rounded shadow-md mt-5">
          <h1 className="text-2xl mb-4">Register</h1>
          <div>
            <label>Logo</label>
            {/* <Field
          type="file"
          name="profilePicture"
          className="border p-2 w-full"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleImageChange(event, setFieldValue)
          }
        /> */}
            <input
              name="profilePicture"
              type="file"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleImageChange(event, setFieldValue)
              }
            />
            {touched.profilePicture && errors.profilePicture ? (
              <div className="text-red-500">{errors.profilePicture}</div>
            ) : null}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="mt-2 h-20 w-20 object-cover"
              />
            )}
          </div>
          <div>
            <label>Name</label>
            <Field type="text" name="name" className="border p-2 w-full" />
            {touched.name && errors.name ? (
              <div className="text-red-500">{errors.name}</div>
            ) : null}
          </div>
          <div>
            <label>Email</label>
            <Field type="email" name="email" className="border p-2 w-full" />
            {touched.email && errors.email ? (
              <div className="text-red-500">{errors.email}</div>
            ) : null}
          </div>
          <div>
            <label>mobile</label>
            <Field type="number" name="mobile" className="border p-2 w-full" />
            {touched.mobile && errors.mobile ? (
              <div className="text-red-500">{errors.mobile}</div>
            ) : null}
          </div>
          <div>
            <label>Password</label>
            <Field
              type="password"
              name="password"
              className="border p-2 w-full"
            />
            {touched.password && errors.password ? (
              <div className="text-red-500">{errors.password}</div>
            ) : null}
          </div>
          <div>
            <label>Address</label>
            <Field type="type" name="address" className="border p-2 w-full" />
            {touched.address && errors.address ? (
              <div className="text-red-500">{errors.address}</div>
            ) : null}
          </div>
          {submitText && (
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              {submitText}
            </button>
          )}
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
}

export default WorkspaceForm;