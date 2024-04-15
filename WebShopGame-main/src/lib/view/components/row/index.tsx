import { getItemProduct } from "@/api/product";
import React, { useEffect, useState } from "react";
import { Product } from "@/lib/domain/product";
import Link from "next/link";
interface Props {
  id: string;
  quanity: number;
}

const Row = ({ id, quanity }: Props) => {
  const [data, setData] = useState<Product>();

  useEffect(() => {
    const fetch = async () => {
      const res = await getItemProduct(id);
      setData(res);
      // setLoading(false);
    };
    fetch();
  }, []);

  return (
    <tr
      key={id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td className="w-32 p-4">
        <img src={data?.urlImage} alt={data?.title} />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {data?.title}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {quanity}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        $ {data?.price}
      </td>
      <td className="px-6 py-4">
        <Link
          href={`/admin/products/${data?._id}`}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          View Product
        </Link>
      </td>
    </tr>
  );
};

export default Row;
