import React, { useState } from "react";
import { toast } from "react-toastify";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import Header from "../components/Header";
import Modal from "../components/Modal";
import DefaultLayout from "../layout/DefaultLayout";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { EmployeeFormInterFace } from "../Types/Form";
import { initialValuesWorkSpace } from "../Forms/InitialValues";
import EmployeeForm from "../Forms/EmployeeForm";
import {
  registerAllEmployee,
  registerEditEmployee,
} from "../redux/slices/registerSlice";
import { signupSchemaForWorkSpace } from "../Forms/Validaions";
import { jsonToCsv } from "../utils/jsonToCsv";
import { downloadCsv } from "../utils/downloadCsv";

function WorkspaceAdmin() {
  const { allUser } = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<string | number | null>("");
  const [initialValue, setInitialValue] = useState<EmployeeFormInterFace>(
    initialValuesWorkSpace
  );
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setIsEdit("");
    setInitialValue(initialValuesWorkSpace);
  };

  const handleExport = () => {
    const fields = [
      "name",
      "email",
      "mobile",
      "address",
      "companyname",
      "companyaddress",
      "experience",
    ];
    const data = allUser.filter((item) => item.role === "employee");
    const csv = jsonToCsv(data, fields);
    downloadCsv(csv, "employees.csv");
  };

  const handleDelete = (id: string | number) => {
    const data = allUser.filter((item) => item.id !== id);
    dispatch(registerEditEmployee(data));
  };

  const handleEdit = (id: string | number) => {
    setOpen(true);
    const data = allUser.find((item) => item.id === id);
    const update = {
      id: data?.id || "",
      name: data?.name || "",
      email: data?.email || "",
      mobile: data?.mobile || null,
      address: data?.address || "",
      companyname: data?.companyname || "",
      companyaddress: data?.companyaddress || "",
      experience: data?.experience || "",
      role: data?.role,
    };
    setIsEdit(id);
    setInitialValue(update);
    console.log("data", id);
  };

  const handleSubmit = (values: EmployeeFormInterFace) => {
    console.log("values", isEdit);
    if (!isEdit) {
      const data = {
        ...values,
        role: "employee",
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
      setInitialValue(initialValuesWorkSpace);
    }
    setOpen(false);
    // navigate("/auth/login");
  };
  return (
    <DefaultLayout>
      <Header heading="Employee" />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Employee Table</h2>
            <div>
              <button
                className="bg-green-500 text-white mr-2 px-2 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                onClick={() => setOpen(!open)}
              >
                Add
              </button>
              {allUser.filter((item) => item.role === "employee").length >
                0 && (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                  onClick={() => handleExport()}
                >
                  Export
                </button>
              )}
            </div>
          </div>
          <Table handleEdit={handleEdit} handleDelete={handleDelete} />
          {/* pagination */}
          {allUser.filter((item) => item.role === "employee").length > 0 && (
            <Pagination
              dataLength={
                allUser.filter((item) => item.role === "employee").length
              }
            />
          )}
        </div>
      </main>
      {open && (
        <Modal open={open} setOpen={setOpen} handleClose={handleClose}>
          <EmployeeForm
            initialValues={initialValue}
            validationSchema={signupSchemaForWorkSpace}
            onSubmit={handleSubmit}
            submitText={isEdit ? "Update" : "Submit"}
          />
        </Modal>
      )}
    </DefaultLayout>
  );
}

export default WorkspaceAdmin;