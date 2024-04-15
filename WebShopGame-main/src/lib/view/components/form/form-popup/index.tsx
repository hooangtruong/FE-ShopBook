import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PopupContext } from "@/lib/hook/Context/popup";
import { Product, ProductPost } from "@/lib/domain/product";
import Confirm from "@/lib/view/components/confirm";
import { User } from "@/lib/domain/user";
import Form from "..";

interface PropsDefaultValue {
  functionApi: (data: any, id?: string) => Promise<Product[] | User[]>;
  className: string;
  children: (props: any) => React.JSX.Element;
}

const FormPopup: React.FC<PropsDefaultValue> = ({ functionApi, children }) => {
  const { popup, setPopup } = useContext(PopupContext);
  const [confirm, setConfirm] = useState(false);
  const [dataPopup, setDataPopup] = useState({});

  const handleFormData = (data: any) => {
    setDataPopup(data);
  };

  const handleClose = () => {
    setPopup(false);
  };
  return (
    <>
      {popup && (
        <>
          {confirm ? (
            <Confirm
              className="absolute w-full h-full top-0 bg-black-shadow z-10"
              classPositionBox="top-28"
              functionApi={functionApi}
              setConfirm={setConfirm}
              data={dataPopup}
            />
          ) : (
            <div className="absolute w-full h-full top-0 left-0 bg-black-shadow">
              <div className="w-full max-w-6xl mx-auto relative top-28 z-10">
                <div className="w-full relative">
                  <button
                    className="flex absolute right-0 p-4"
                    onClick={handleClose}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
                <Form
                  setConfirm={setConfirm}
                  setData={handleFormData}
                  functionApi={functionApi}
                  className=""
                >
                  {children}
                </Form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default FormPopup;
