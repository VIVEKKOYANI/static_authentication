import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { FormProps } from "../Types/Form";

interface FormProp {
  initialValues: FormProps;
  validationSchema: Yup.ObjectSchema<FormProps>;
  onSubmit: (values: FormProps) => void;
  submitText?: string;
  imagePreview: any;
  handleImageChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<FormProps>["setFieldValue"]
  ) => void;
}

function FormC({
  initialValues,
  validationSchema,
  onSubmit,
  imagePreview,
  submitText,
  handleImageChange,
}: FormProp) {
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
            <label>Company</label>
            <Field type="type" name="company" className="border p-2 w-full" />
            {touched.company && errors.company ? (
              <div className="text-red-500">{errors.company}</div>
            ) : null}
          </div>
          <div>
            <label>Dob</label>
            <Field type="date" name="dob" className="border p-2 w-full" />
            {touched.dob && errors.dob ? (
              <div className="text-red-500">{errors.dob}</div>
            ) : null}
          </div>
          <div>
            <label>department</label>
            <Field
              type="type"
              name="department"
              className="border p-2 w-full"
            />
            {touched.department && errors.department ? (
              <div className="text-red-500">{errors.department}</div>
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
            <label>profilePicture</label>
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
            <label>joiningDate</label>
            <Field
              type="date"
              name="joiningDate"
              className="border p-2 w-full"
            />
            {touched.joiningDate && errors.joiningDate ? (
              <div className="text-red-500">{errors.joiningDate}</div>
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

export default FormC;