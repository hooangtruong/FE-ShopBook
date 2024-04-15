import HistoryOrder from "@/lib/view/components/details-user-history-order";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-2">
      <div className="col-span-2 border border-solid bg-white rounded-md">
        <ul className="text-sm">
          <li className="p-6 border-solid border-b border-[#e6e8eb] hover:border-l-4 hover:border-l-blue-500 cursor-pointer">
            <Link className="flex gap-3" href="">
              <Image
                src="/images/icons/user2.svg"
                alt="User"
                width={20}
                height={20}
              />
              <h3>My profile</h3>
            </Link>
          </li>
          <li className="p-6 border-solid border-b border-[#e6e8eb] hover:border-l-4 hover:border-l-blue-500 cursor-pointer">
            <Link className="flex gap-3" href="">
              <Image
                src="/images/icons/cart2.svg"
                alt="User"
                width={20}
                height={20}
              />
              <h3>My Order</h3>
            </Link>
          </li>
          <li className="p-6 border-solid border-b border-[#e6e8eb] hover:border-l-4 hover:border-l-blue-500 cursor-pointer">
            <Link className="flex gap-3" href="">
              <Image
                src="/images/icons/heart.svg"
                alt="User"
                width={20}
                height={20}
              />
              <h3>Favorites list</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 border border-solid bg-white rounded-md">
        <HistoryOrder />
      </div>
    </div>
  );
}
