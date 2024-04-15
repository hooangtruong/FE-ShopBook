import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product, ProductPost } from "@/lib/domain/product";
import { User } from "@/lib/domain/user";

interface PropsDefaultValue {
  functionApi: (data: any, id?: string) => Promise<Product[] | User[]>;
  className: string;
  children: (props: any) => React.JSX.Element;
  setData: (data: ProductPost | User) => void;
  setConfirm: (props: boolean) => void;
}

const Form: React.FC<PropsDefaultValue> = ({
  children,
  functionApi,
  setData,
  setConfirm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product | User>();

  const onSubmit: SubmitHandler<ProductPost | User> = async (data) => {
    await functionApi(data);
    setData(data);
    setConfirm(true);
  };

  return (
    <>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-10"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children({ registers: register, error: errors })}
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
