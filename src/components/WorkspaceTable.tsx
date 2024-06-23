import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type WorkSpaceTableProps = {
  handleEdit: (id: number | string) => void;
  handleToogleDeactive: (id: number | string) => void;
}

function WorkspaceTable({handleEdit, handleToogleDeactive} : WorkSpaceTableProps) {
  const { allUser } = useSelector((state: RootState) => state.register);
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div> */}

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Phone number</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Password</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Address</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {allUser.filter((item) => item.role === 'workspace').map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="rounded-md">
                <img src={product.profilePicture} alt="Product" className="h-8 w-8"  />
              </div>
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
              ${product.mobile}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.password}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${product.address}</p>
          </div>
          <div className="col-span-2 flex items-center space-x-3.5">
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md border border-indigo-600  py-2 px-5 text-center font-medium text-indigo-600 hover:bg-opacity-90 lg:px-8 xl:px-5"
              onClick={() => handleEdit(product.id)}
            >
              Edit
            </Link>
            {/* inline-flex items-center justify-center rounded-md border border-red-600 py-2 px-5 text-center font-medium text-red-600 hover:bg-opacity-90 lg:px-8 xl:px-5 */}
            <Link
              to="#"
              className={`inline-flex items-center justify-center rounded-md border py-2 px-5 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-5 ${product.isActive ? 'text-red-600' : 'text-green-600'} ${product.isActive ? 'border-red-600' : 'border-green-600'}`}
              onClick={() => handleToogleDeactive(product.id)}
            >
              {product.isActive ? 'Deactive' : 'Active'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkspaceTable;