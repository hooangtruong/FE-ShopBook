"use client";

import { User } from "@/lib/domain/user";
import { useForm } from "react-hook-form";
import Input from "@/lib/view/components/input";
import Form from "@/lib/view/components/form";
import { postProduct } from "@/api/product";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot Password
          </h2>
          <Form functionApi={postProduct} className="">
            {(props: any) => (
              <>
                <div className="mb-4">
                  <Input
                    label="Tile"
                    name="title"
                    type="text"
                    register={props.registers}
                    errors={props.error}
                    placeholder="Title"
                    errorsOption={{
                      required: { value: true, message: "Title is empty" },
                      maxLength: {
                        value: 250,
                        message: "Title cannot exceed 50 characters",
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
                    label="Description"
                    name="description"
                    type="text"
                    register={props.registers}
                    errors={props.error}
                    placeholder="Description"
                    errorsOption={{
                      required: {
                        value: true,
                        message: "Description is empty",
                      },
                      maxLength: {
                        value: 500,
                        message: "Description cannot exceed 500 characters",
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
                    label="Price"
                    name="price"
                    type="number"
                    register={props.registers}
                    errors={props.error}
                    placeholder="Price"
                    errorsOption={{
                      required: { value: true, message: "Price is empty" },
                    }}
                    classLabel="block text-gray-700 text-sm font-bold mb-2"
                    classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="Quantity"
                    name="quantity"
                    type="number"
                    register={props.registers}
                    errors={props.error}
                    placeholder="Quantity"
                    errorsOption={{
                      required: { value: true, message: "Quantity is empty" },
                    }}
                    classLabel="block text-gray-700 text-sm font-bold mb-2"
                    classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="UrlImage"
                    name="urlImage"
                    type="text"
                    register={props.registers}
                    errors={props.error}
                    placeholder="UrlImage"
                    errorsOption={{
                      required: { value: true, message: "UrlImage is empty" },
                      maxLength: {
                        value: 250,
                        message: "Title cannot exceed 50 characters",
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
              </>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
};
export default ResetPassword;
