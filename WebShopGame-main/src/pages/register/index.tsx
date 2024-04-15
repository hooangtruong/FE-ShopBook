import { postUser } from "@/api/user";
import { User } from "@/lib/domain/user";
import Confirm from "@/lib/view/components/confirm";
import Input from "@/lib/view/components/input";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const [passwordShown, setPasswordShown] = useState(false);
  const [user, setUser] = useState({});
  const [confirm, setConfirm] = useState(false);
  // const [accept, setAccept] = useState(false);
  // const [error, setError] = useState("");
  const onSubmit: SubmitHandler<User> = (data) => {
    const {
      ["first-name"]: firstName,
      ["last-name"]: lastName,
      ...restData
    } = data;
    const username = `${firstName} ${lastName}`;
    const updatedData = {
      ...restData,
      username: username,
    };
    setUser(updatedData);
    setConfirm(true);
    // if (accept) {
    //   setError("");
    // } else setError("Please agree to the Terms and Conditions");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:my-3 sm:max-w-4xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          {confirm ? (
            <Confirm
              fuctionApi={postUser}
              setConfirm={setConfirm}
              data={user}
            />
          ) : (
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  label="Link url avatar"
                  //   defaultValue={defaultValue ? defaultValue.title : ""}
                  name="urlavatar"
                  type="text"
                  register={register}
                  errors={errors}
                  placeholder="Avatar"
                  errorsOption={{
                    required: { value: true, message: "Avatar is empty" },
                    maxLength: {
                      value: 250,
                      message: "Avatar cannot exceed 250 characters",
                    },
                  }}
                  classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  classInput="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="grid grid-flow-col gap-3">
                  <Input
                    label="First Name"
                    //   defaultValue={defaultValue ? defaultValue.title : ""}
                    name="first-name"
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="First Name"
                    errorsOption={{
                      required: { value: true, message: "First Name is empty" },
                      maxLength: {
                        value: 30,
                        message: "First Name cannot exceed 30 characters",
                      },
                      pattern: {
                        value: /^([^0-9]*)$/,
                        message: "Invalid first name",
                      },
                    }}
                    classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    classInput="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <Input
                    label="Last Name"
                    //   defaultValue={defaultValue ? defaultValue.title : ""}
                    name="last-name"
                    type="text"
                    register={register}
                    errors={errors}
                    placeholder="Last Name"
                    errorsOption={{
                      required: { value: true, message: "Last Name is empty" },
                      maxLength: {
                        value: 50,
                        message: "Last Name cannot exceed 50 characters",
                      },
                      pattern: {
                        value: /^([^0-9]*)$/,
                        message: "Invalid first name",
                      },
                    }}
                    classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    classInput="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <Input
                  label="Address"
                  //   defaultValue={defaultValue ? defaultValue.title : ""}
                  name="address"
                  type="text"
                  register={register}
                  errors={errors}
                  placeholder="Address"
                  errorsOption={{
                    required: { value: true, message: "Address is empty" },
                    maxLength: {
                      value: 50,
                      message: "Address cannot exceed 50 characters",
                    },
                  }}
                  classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  classInput="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <Input
                  label="Email"
                  //   defaultValue={defaultValue ? defaultValue.title : ""}
                  name="email"
                  type="text"
                  register={register}
                  errors={errors}
                  placeholder="Email"
                  errorsOption={{
                    required: { value: true, message: "Email is empty" },
                    maxLength: {
                      value: 50,
                      message: "Email cannot exceed 50 characters",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  classInput="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <Input
                  label="Password"
                  //   defaultValue={defaultValue ? defaultValue.title : ""}
                  name="password"
                  type={passwordShown ? "type" : "password"}
                  register={register}
                  errors={errors}
                  placeholder="Password"
                  errorsOption={{
                    required: { value: true, message: "Password is empty" },
                    maxLength: {
                      value: 50,
                      message: "Password cannot exceed 50 characters",
                    },
                  }}
                  classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  classInput="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="mt-1">
                  <input
                    id="show-password"
                    type="checkbox"
                    className="mr-2"
                    onChange={(e: any) => setPasswordShown(e.target.checked)}
                  />
                  <label htmlFor="show-password" className="text-white">
                    Show password
                  </label>
                </div>
                {/* <Input
                label="Confirm password"
                //   defaultValue={defaultValue ? defaultValue.title : ""}
                name="confirm-password"
                type="password"
                register={register}
                errors={errors}
                placeholder="Password"
                errorsOption={{
                  required: {
                    value: true,
                    message: "Confirm password is empty",
                  },
                  maxLength: {
                    value: 50,
                    message: "Confirm password cannot exceed 50 characters",
                  },
                }}
                classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                classInput="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              /> */}
                {/* Kiểm tra accept các điều khoản chưa (comming soon) */}
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      onChange={(e: any) => setAccept(e.target.checked)}
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <p className="text-red-600 mt-3">{error}</p>
                </div> */}
                <button
                  type="submit"
                  className={`w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800`}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Register;
