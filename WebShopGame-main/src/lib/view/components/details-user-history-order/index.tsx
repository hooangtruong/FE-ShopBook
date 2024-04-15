import React, { useEffect, useState } from "react";
import Table from "../table";
import { Columns } from "../table/table";
import { getOrderByIdUser } from "@/api/order";
import { useSelector } from "react-redux";
import { user } from "@/lib/redux/selector/UserSelect";

const HistoryOrder = () => {
  const users = useSelector(user);

  const columns: Columns[] = [
    {
      title: "Order Id",
      span: 2,
      render: (items) => (
        <p className="text-sm text-black">{items._id.substring(10)}</p>
      ),
    },
    {
      title: "User Id",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black">{items.username.substring(12)}</p>
      ),
    },
    {
      title: "Status",
      span: 1,
      render: (items) => <p className="text-sm text-black">pending</p>,
    },
    {
      title: "Quantity",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black">{items.product.length}</p>
      ),
    },
    {
      title: "Total Price",
      span: 1,
      render: (items) => (
        <p className="text-sm text-meta-3">${items.totalOrder}</p>
      ),
    },
    {
      title: "Time Create",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black">
          <p className="text-sm text-black">
            {items.createdAt.substring(12, 19)}
            <br />
            {items.createdAt.substring(0, 10)}
          </p>
        </p>
      ),
    },
  ];

  return (
    <div>
      <Table
        title="Order History"
        columns={columns}
        fuctionApi={getOrderByIdUser}
        id={users._id}
        plus={false}
        classCols="grid-cols-8"
        linkDetails="order"
      />
    </div>
  );
};
export default HistoryOrder;
