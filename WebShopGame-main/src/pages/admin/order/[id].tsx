import { getOrderById } from "@/api/order";
import { getItemProduct } from "@/api/product";
import { Order } from "@/lib/domain/order";
import { PopupContext } from "@/lib/hook/Context/popup";
import Row from "@/lib/view/components/row";
// import EditButton from "@/lib/view/components/edit-button";
// import Formroduct from "@/lib/view/components/form/form-product";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Details = () => {
  const [items, setItems] = useState<Order>();
  const [loading, setLoading] = useState(true);
  const { popup, setPopup } = useContext(PopupContext);
  const { query } = useRouter();
  const id = query.id;

  const handleClick = () => {
    setPopup(true);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getOrderById(id);
      setItems(res);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <section className="text-gray-700 body-font overflow-hidden dark:bg-boxdark bg-white">
      {/* <Formroduct fuctionApi={updateItemProduct} defaultValue={items} /> */}
      <div className="container px-5 pt-5 pb-15 mx-auto">
        <button className="pb-4">
          <Link href="/admin/order">
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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Time create
                </th>
                <th scope="col" className="px-6 py-3">
                  Order number ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Total quanity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total amount
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {items?.createdAt.substring(12, 19)}
                  <br />
                  {items?.createdAt.substring(0, 10)}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {items?._id}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {items?.product.length}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {items?.totalOrder}
                </td>
                <th scope="col" className="px-6 py-3">
                  View Invoice
                </th>
              </tr>
            </tbody>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <span className="text-gray-400">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {items?.product.map((prod) => (
                <Row id={prod.id} quanity={prod.quantity}></Row>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default Details;
