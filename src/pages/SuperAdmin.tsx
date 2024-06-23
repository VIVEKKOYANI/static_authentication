import React, { useState } from "react";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Modal from "../components/Modal";
import DefaultLayout from "../layout/DefaultLayout";
import WorkspaceTable from "../components/WorkspaceTable";
import WorkspaceForm from "../Forms/WorkspaceForm";
import { FormProps, WorkspaceFormInterFace } from "../Types/Form";
import {
  registerAllEmployee,
  registerEditEmployee,
} from "../redux/slices/registerSlice";
import { RootState } from "../redux/store";
import { initialValuesSuperAdmin } from "../Forms/InitialValues";
import { SignupSchemaForSuperAdmin } from "../Forms/Validaions";

function SuperAdmin() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { allUser } = useSelector((state: RootState) => state.register);
  const [open, setOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [isEdit, setIsEdit] = useState<string | number | null>("");
  const [initialValue, setInitialValue] = useState<WorkspaceFormInterFace>(
    initialValuesSuperAdmin
  );

  const handleClose = () => {
    setOpen(false);
    setIsEdit("");
    setInitialValue(initialValuesSuperAdmin);
    setImagePreview("");
  };

  const handleToogleDeactive = (id: number | string) => {
    const data = allUser.map((item) => {
      if (item.id === id) {
        return {
          ...item, // Spread the existing properties first
          isActive: !item.isActive, // Override the isActive property
        };
      }
      return item; // Return the item unchanged if id doesn't match
    });
    console.log("ssssssss", data);
    
    dispatch(registerEditEmployee(data));
  }

  const handleEdit = (id: number | string) => {
    setOpen(true);
    const data = allUser.find((item) => item.id === id);
    const update = {
      id: data?.id || "",
      name: data?.name || "",
      email: data?.email || "",
      password: data?.password || "",
      mobile: data?.mobile || null,
      profilePicture: data?.profilePicture || "",
      address: data?.address || "",
      isActive: data?.isActive || true,
      role: data?.role,
    };
    setIsEdit(id);
    setImagePreview(data?.profilePicture);
    setInitialValue(update);
    console.log("data", id);
  };

  const handleSubmit = (values: WorkspaceFormInterFace) => {
    console.log("values", isEdit);
    if (!isEdit) {
      const data = {
        ...values,
        isActive: true,
        role: "workspace",
      };
      console.log("data", data);

      dispatch(registerAllEmployee(data));
      toast.success("Registration successful!");
    } else {
      const newData = allUser.map((item) => {
        if (item.id === isEdit) {
          return {
            ...values,
          };
        } else {
          return { ...item };
        }
      });
      dispatch(registerEditEmployee(newData));
      toast.success("Update successful!");
      setIsEdit("");
      setInitialValue(initialValuesSuperAdmin);
      setImagePreview("");
    }
    setOpen(false);
    // navigate("/auth/login");
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
    <DefaultLayout>
      <Header heading="WorkSpace" />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">WorkSpace Table</h2>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
              onClick={() => setOpen(!open)}
            >
              Add
            </button>
          </div>
          <WorkspaceTable handleEdit={handleEdit} handleToogleDeactive={handleToogleDeactive} />
          {allUser.filter((item) => item.role === "workspace").length > 0 && (
            <Pagination
              dataLength={
                allUser.filter((item) => item.role === "workspace").length
              }
            />
          )}
        </div>
      </main>
      {open && (
        <Modal open={open} setOpen={setOpen} handleClose={handleClose}>
          <WorkspaceForm
            initialValues={initialValue}
            validationSchema={SignupSchemaForSuperAdmin}
            onSubmit={handleSubmit}
            handleImageChange={handleImageChange}
            imagePreview={imagePreview}
            submitText={isEdit ? "Update" : "Submit"}
          />
        </Modal>
      )}
    </DefaultLayout>
  );
}

export default SuperAdmin;