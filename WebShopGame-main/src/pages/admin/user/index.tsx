import React from "react";
import { deleteUser, getUser, postUser } from "@/api/user";
import Table from "@/lib/view/components/table";
import { Columns } from "@/lib/view/components/table/table";
import Switcher from "@/lib/view/components/switch";
import Input from "@/lib/view/components/input";
import FormPopup from "@/lib/view/components/form/form-popup";

const UserList = () => {
  const columns: Columns[] = [
    {
      title: "ID",
      span: 2,
      render: (items) => (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-black">{items._id}</p>
        </div>
      ),
    },
    {
      title: "User Name",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black">
          {items.username.length > 16
            ? items.username.substring(0, 16) + "..."
            : items.username}
        </p>
      ),
    },
    {
      title: "Email",
      span: 2,
      render: (items) => <p className="text-sm text-black">{items.email}</p>,
    },
    {
      title: "Role",
      span: 1,
      render: (items) => (
        <>
          {items.admin ? (
            <p className="text-sm text-black dark:text-red-600">Admin</p>
          ) : (
            <p className="text-sm text-black dark:text-green-400">Member</p>
          )}
        </>
      ),
    },
    {
      title: "Time Create",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black">
          {items.createdAt.substring(12, 19)}
          <br />
          {items.createdAt.substring(0, 10)}
        </p>
      ),
    },
  ];

  return (
    <>
      <FormPopup fuctionApi={postUser} className="">
        {(props: any) => (
          <>
            <div className="mb-4">
              <Input
                label="User Name"
                name="username"
                type="text"
                register={props.registers}
                errors={props.error}
                placeholder="User Name"
                errorsOption={{
                  required: { value: true, message: "User Name is empty" },
                  maxLength: {
                    value: 50,
                    message: "Title cannot exceed 50 characters",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must not be less than 6 characters",
                  },
                }}
                classLabel="block text-gray-700 text-sm font-bold mb-2"
                classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <Input
                label="Email"
                name="email"
                type="text"
                register={props.registers}
                errors={props.error}
                placeholder="Email"
                errorsOption={{
                  required: {
                    value: true,
                    message: "Email is empty",
                  },
                  maxLength: {
                    value: 50,
                    message: "Email cannot exceed 50 characters",
                  },
                  minLength: {
                    value: 5,
                    message: "Password must not be less than 6 characters",
                  },
                }}
                classLabel="block text-gray-700 text-sm font-bold mb-2"
                classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <Input
                label="Password"
                name="password"
                type="password"
                register={props.registers}
                errors={props.error}
                placeholder="Password"
                errorsOption={{
                  required: { value: true, message: "Password is empty" },
                  maxLength: {
                    value: 50,
                    message: "Password cannot exceed 50 characters",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must not be less than 6 characters",
                  },
                }}
                classLabel="block text-gray-700 text-sm font-bold mb-2"
                classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <Input
                label="Address"
                name="address"
                type="text"
                register={props.registers}
                errors={props.error}
                placeholder="Address"
                errorsOption={{
                  required: { value: true, message: "Address is empty" },
                  maxLength: {
                    value: 50,
                    message: "Address cannot exceed 50 characters",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must not be less than 6 characters",
                  },
                }}
                classLabel="block text-gray-700 text-sm font-bold mb-2"
                classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <Input
                label="urlAvatar"
                name="urlavatar"
                type="text"
                register={props.registers}
                errors={props.error}
                placeholder="urlAvatar"
                errorsOption={{
                  required: { value: true, message: "urlAvatar is empty" },
                  maxLength: {
                    value: 250,
                    message: "Address cannot exceed 250 characters",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must not be less than 6 characters",
                  },
                }}
                classLabel="block text-gray-700 text-sm font-bold mb-2"
                classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <Switcher
                name="admin"
                register={props.registers}
                errors={props.error}
                label="Role Admin"
                classLabel="block text-gray-700 text-sm font-bold mb-2"
              />
            </div>
          </>
        )}
      </FormPopup>
      <Table
        deleteApi={deleteUser}
        title="User"
        columns={columns}
        fuctionApi={getUser}
        linkDetails="/admin/user"
      />
    </>
  );
};
export default UserList;
