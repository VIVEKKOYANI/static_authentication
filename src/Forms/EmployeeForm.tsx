import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { ToastContainer } from "react-toastify";
import { EmployeeFormInterFace } from "../Types/Form";

interface EmployeeProps {
  initialValues: EmployeeFormInterFace;
  validationSchema: Yup.ObjectSchema<EmployeeFormInterFace>;
  onSubmit: (values: EmployeeFormInterFace) => void;
  submitText?: string;
}

function EmployeeForm({
  initialValues,
  validationSchema,
  onSubmit,
  submitText,
}: EmployeeProps) {
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
          {/* <h1 className="text-2xl mb-4">Register</h1> */}
          {/* Form fields with validation */}
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
            <label>Address</label>
            <Field type="type" name="address" className="border p-2 w-full" />
            {touched.address && errors.address ? (
              <div className="text-red-500">{errors.address}</div>
            ) : null}
          </div>
          <div>
            <label>Company Name</label>
            <Field
              type="type"
              name="companyname"
              className="border p-2 w-full"
            />
            {touched.companyname && errors.companyname ? (
              <div className="text-red-500">{errors.companyname}</div>
            ) : null}
          </div>
          <div>
            <label>Company Address</label>
            <Field
              type="type"
              name="companyaddress"
              className="border p-2 w-full"
            />
            {touched.companyaddress && errors.companyaddress ? (
              <div className="text-red-500">{errors.companyaddress}</div>
            ) : null}
          </div>
          <div>
            <label>Experience</label>
            <Field
              type="type"
              name="experience"
              className="border p-2 w-full"
            />
            {touched.experience && errors.experience ? (
              <div className="text-red-500">{errors.experience}</div>
            ) : null}
          </div>
          <div>
            <label>Role</label>
            <Field as="select" name="role">
              <option value="workspace">workspace</option>
              <option value="employee">Employee</option>
            </Field>
            {touched.role && errors.role ? (
              <div className="text-red-500">{errors.role}</div>
            ) : null}
          </div>
          {/* Add other form fields similarly */}
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

export default EmployeeForm;