import { getUserById, updateItemUser } from "@/api/user";
import { Product } from "@/lib/domain/product";
import { User } from "@/lib/domain/user";
import { PopupContext } from "@/lib/hook/Context/popup";
import FormPopup from "@/lib/view/components/form/form-popup";
import Input from "@/lib/view/components/input";
import Switcher from "@/lib/view/components/switch";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Details = () => {
  const [items, setItems] = useState<User>();
  const [loading, setLoading] = useState(true);
  const { popup, setPopup } = useContext(PopupContext);
  const { query } = useRouter();
  const id = query.id;

  const handleClick = () => {
    setPopup(true);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getUserById(id);
      setItems(res);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <section className="text-gray-700 body-font overflow-hidden dark:bg-boxdark bg-white">
      <FormPopup fuctionApi={updateItemUser}>
        {(props: any) => (
          <>
            <div className="mb-4">
              <Input
                label="User Name"
                name="username"
                type="text"
                register={props.registers}
                defaultValue={items?.username ? items.username : ""}
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
                defaultValue={items?.email ? items.email : ""}
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
                defaultValue={items?.password ? items.password : ""}
                errors={props.error}
                placeholder="Password"
                errorsOption={{
                  required: { value: true, message: "Password is empty" },
                  maxLength: {
                    value: 250,
                    message: "Password cannot exceed 250 characters",
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
                defaultValue={items?.address ? items.address : ""}
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
                defaultValue={items?.urlavatar ? items.urlavatar : ""}
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
                defaultValue={items?.admin ? items.admin : ""}
                errors={props.error}
                label="Role Admin"
                classLabel="block text-gray-700 text-sm font-bold mb-2"
              />
            </div>
          </>
        )}
      </FormPopup>
      <div className="container px-5 pt-5 pb-15 mx-auto">
        <button className="pb-4">
          <Link href="/admin/user">
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
        <div className="p-16">
          <div className="p-8 bg-white shadow mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                {/* <div>
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">Friends</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Photos</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Comments</p>
            </div> */}
              </div>
              <div className="relative">
                <div className="z-0 w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  {items?.urlavatar ? (
                    <img src={items?.urlavatar} alt="Avatar" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button
                  className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  onClick={handleClick}
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="mt-20 text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700">
                {items?.username}{" "}
                {items?.admin ? (
                  <span className="text-red-600">(Admin)</span>
                ) : (
                  <span className="text-green-600">(Member)</span>
                )}
              </h1>
              <p className="font-light text-gray-600 mt-3">{items?.email}</p>
              <p className="text-gray-500">
                {items?.createdAt.substring(12, 19)}
                <br />
                {items?.createdAt.substring(0, 10)}
              </p>
              <p className="mt-2 text-gray-500">{items?.address}</p>
            </div>
            <div className="mt-12 flex flex-col justify-center">
              <p className="text-gray-600 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
