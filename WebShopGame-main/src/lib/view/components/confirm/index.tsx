import { Product } from "@/lib/domain/product";
import { User } from "@/lib/domain/user";
import { PopupContext } from "@/lib/hook/Context/popup";
import { useRouter } from "next/router";
import React, { useContext } from "react";

interface DataObject {
  [key: string]: any;
}
interface Props {
  setConfirm: (value: boolean) => void;
  data: DataObject;
  functionApi: (data: any, id?: string) => Promise<Product[] | User[]>;
  className?: string;
  classPositionBox?: string;
}

const Confirm: React.FC<Props> = ({
  setConfirm,
  data,
  functionApi,
  className,
  classPositionBox,
}) => {
  const { setPopup } = useContext(PopupContext);
  const keys = data ? Object.keys(data) : [];
  const { query } = useRouter();
  const id = query.id;

  const handleClose = () => {
    setPopup(false);
  };

  const handleBack = () => {
    setConfirm(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirm(false);
    setPopup(false);
    if (id && typeof id === "string") {
      await functionApi(data, id);
    } else {
      await functionApi(data);
    }
  };

  return (
    <div className={className}>
      <div className={`w-full max-w-6xl mx-auto relative ${classPositionBox}`}>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-10"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex justify-between mb-4">
            <button onClick={handleBack}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                id="arrow-back"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </button>
            <button className="flex" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="close"
              >
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
              </svg>
            </button>
          </div>
          {keys.map((items: string) => (
            <div className="mb-4" key={items}>
              {items.toLowerCase().includes("url") ? (
                <>
                  <h2 className="block text-gray-700 text-sm font-bold mb-2">
                    {items[0].toLocaleUpperCase() + items.slice(1)}:
                  </h2>
                  <img src={data[items]} alt={items} width={300} height={200} />
                </>
              ) : (
                <div className="flex gap-3">
                  <h2 className="block text-gray-700 text-sm font-bold mb-2">
                    {items[0].toLocaleUpperCase() + items.slice(1)}:
                  </h2>
                  {typeof data[items] == "boolean" ? (
                    <span className="text-gray-500">
                      {data[items] ? "Yes" : "No"}
                    </span>
                  ) : (
                    <span className="text-gray-500">{data[items]}</span>
                  )}
                </div>
              )}
            </div>
          ))}
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
export default Confirm;
