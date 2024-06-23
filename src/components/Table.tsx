import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type employeeTableProps = {
  handleEdit: (id: number | string) => void;
  handleDelete: (id: number | string) => void;
}


function Table({handleEdit, handleDelete}: employeeTableProps) {
  const { user } = useSelector((state: RootState) => state.auth);
  const { allUser } = useSelector((state: RootState) => state.register);
  console.log("user9090", user);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div> */}

      <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Phone Number</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Address</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Company Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Company Address</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Experience</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {allUser
        .filter((item) => item?.role === "employee")
        .map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-1 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.name}
                </p>
              </div>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {product.email}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {product.mobile}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {product.address}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3">{product.companyname}</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3">{product.companyaddress}</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3">{product.experience}</p>
            </div>
            <div className="col-span-1 flex items-center space-x-1.5">
              <Link
                to="#"
                className="inline-flex items-center justify-center rounded-md border border-primary py-1 px-2 text-center font-medium text-primary hover:bg-opacity-90 lg:px-4 xl:px-2"
                onClick={() => handleEdit(product.id)}
              >
                Edit
              </Link>
              <Link
                to="#"
                className="inline-flex items-center justify-center rounded-md border border-primary py-1 px-2 text-center font-medium text-primary hover:bg-opacity-90 lg:px-4 xl:px-2"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Table;