import { deleteProduct, getListProduct, postProduct } from "@/api/product";
import React from "react";
import Table from "@/lib/view/components/table";
import { Columns } from "@/lib/view/components/table/table";
import Input from "@/lib/view/components/input";
import Select from "@/lib/view/components/select";
import Switcher from "@/lib/view/components/switch";
import FormPopup from "@/lib/view/components/form/form-popup";

const ProductList = () => {
  const columns: Columns[] = [
    {
      title: "Product Name",
      span: 2,
      render: (items) => (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="h-full w-15 rounded-md">
            <img src={`${items.urlImage}`} alt="Product" />
          </div>
          <p className="text-sm text-black ">
            {items.title.substring(0, 20) + "...."}
          </p>
        </div>
      ),
    },
    {
      title: "Category",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black ">{items.category}</p>
      ),
    },
    {
      title: "Price",
      span: 1,
      render: (items) => <p className="text-sm text-black ">${items.price}</p>,
    },
    {
      title: "Quantity",
      span: 1,
      render: (items) => (
        <p
          className={`text-sm ${
            items.quantity == 0 ? "text-red-600" : "text-black "
          }  `}
        >
          {items.quantity == 0 ? "Solds" : items.quantity}
        </p>
      ),
    },
    {
      title: "Profit",
      span: 1,
      render: (items) => <p className="text-sm text-meta-3">${items.price}</p>,
    },
    {
      title: "Time Create",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black ">
          {items.createdAt.substring(12, 19)}
          <br />
          {items.createdAt.substring(0, 10)}
        </p>
      ),
    },
  ];

  const options = [
    {
      value: "game",
      text: "Game",
    },
    {
      value: "study",
      text: "Study",
    },
    {
      value: "entertainment",
      text: "Entertainment",
    },
  ];

  return (
    <>
      <FormPopup functionApi={postProduct} className="">
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
            <div className="mb-4">
              <Select
                label="Category"
                name="category"
                register={props.registers}
                errors={props.error}
                textSelect="Choose category"
                errorsOption={{
                  required: { value: true, message: "Category is empty" },
                }}
                classLabel="block text-gray-700 text-sm font-bold mb-2"
                classSelect="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                options={options}
              />
            </div>
            <div className="mb-4">
              <Switcher
                name="isHot"
                register={props.registers}
                errors={props.error}
                label="Best seller"
                classLabel="block text-gray-700 text-sm font-bold mb-2"
              />
            </div>
          </>
        )}
      </FormPopup>
      <Table
        deleteApi={deleteProduct}
        title="Products"
        columns={columns}
        fuctionApi={getListProduct}
        linkDetails="/admin/products"
      />
    </>
  );
};
export default ProductList;
