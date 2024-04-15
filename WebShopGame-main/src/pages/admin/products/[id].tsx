import { getItemProduct, updateItemProduct } from "@/api/product";
import { Product } from "@/lib/domain/product";
import { PopupContext } from "@/lib/hook/Context/popup";
import FormPopup from "@/lib/view/components/form/form-popup";
import Input from "@/lib/view/components/input";
import Select from "@/lib/view/components/select";
import Switcher from "@/lib/view/components/switch";
// import EditButton from "@/lib/view/components/edit-button";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Details = () => {
  const [items, setItems] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const { popup, setPopup } = useContext(PopupContext);
  const { query } = useRouter();
  const id = query.id;

  const handleClick = () => {
    setPopup(true);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getItemProduct(id);
      setItems(res);
      setLoading(false);
    };
    fetch();
  }, []);

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
    <section className="text-gray-700 body-font overflow-hidden dark:bg-boxdark bg-white">
      <FormPopup functionApi={updateItemProduct}>
        {(props: any) => (
          <>
            <div className="mb-4">
              <Input
                label="Tile"
                name="title"
                type="text"
                register={props.registers}
                defaultValue={items?.title ? items.title : ""}
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
                defaultValue={items?.description ? items.description : ""}
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
                defaultValue={items?.price ? items.price : 0}
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
                defaultValue={items?.quantity ? items.quantity : 0}
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
                defaultValue={items?.urlImage ? items.urlImage : ""}
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
                defaultValue={items?.category && items.urlImage}
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
                defaultValue={items?.isHot ? items.isHot : !items?.isHot}
                errors={props.error}
                label="Best seller"
                classLabel="block text-gray-700 text-sm font-bold mb-2"
              />
            </div>
          </>
        )}
      </FormPopup>
      <div className="container px-5 pt-5 pb-15 mx-auto">
        <button className="pb-4">
          <Link href="/admin/products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#FFFF"
              id="arrow-back"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </Link>
        </button>
        <div className="mx-auto flex flex-wrap">
          {loading ? (
            <img
              alt="ecommerce"
              className="h-[505px] w-full"
              src={"/images/icons/no-images.svg"}
            />
          ) : (
            <img
              alt="ecommerce"
              className="w-full object-cover object-center rounded border border-gray-200"
              src={items?.urlImage}
            />
          )}

          <div className="w-full lg:py-6 mt-6 lg:mt-0">
            <div className="flex items-center gap-4">
              <h1 className="text-gray-900 dark:text-gray-50 text-3xl title-font font-medium mb-1">
                {items?.title}
              </h1>
            </div>
            <h2 className="text-sm title-font text-gray-500 dark:text-white tracking-widest">
              Category : {items?.category}
            </h2>
            <h2 className="text-sm title-font text-gray-500 dark:text-white tracking-widest">
              Status :{" "}
              {items?.quantity == 0 ? (
                <span className="text-red-600"> SOLD</span>
              ) : (
                <span className="text-green-500">
                  Stocking ({items?.quantity})
                </span>
              )}
            </h2>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3 dark:text-gray-400">
                  4 Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed dark:text-gray-200">
              {items?.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                {/* <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
              </div>
            </div>
            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900 dark:text-gray-300">
                ${items?.quantity}
              </span>
              <div className="flex">
                <button
                  className="mr-3 flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                  onClick={handleClick}
                >
                  Edit
                </button>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
