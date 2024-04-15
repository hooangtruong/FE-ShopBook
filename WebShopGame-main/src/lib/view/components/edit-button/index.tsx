import { updateItemProduct } from "@/api/product";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";

interface Props {
  size?: number;
  children: ReactNode;
  text?: string;
  classInput?: string;
  setCheckChange?: (value: boolean) => void;
}

const EditButton: React.FC<Props> = ({
  size = 23,
  children,
  text,
  classInput,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false);
  const { query } = useRouter();
  const id = query.id;

  const handleChange = (e: any) => {
    if (e.target.value === "") {
      setError(true);
    } else {
      setValue(e.target.value);
      setError(false);
    }
  };

  const handleClick = () => {
    setActive(!active);
    if (value === "") {
      setError(true);
      setActive(true);
    } else {
      setError(false);
      // updateItemProduct(id, { title: value });
    }
  };
  return (
    <>
      <div className="flex items-center gap-4">
        {active ? (
          <div>
            <input
              type="text"
              className={`bg-transparent ${classInput}`}
              placeholder={text}
              defaultValue={text}
              onBlur={handleClick}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>{children}</>
        )}

        <div className="cursor-pointer" onClick={handleClick}>
          <img
            src="/images/icons/edit.svg"
            alt="edit-button"
            width={size}
            height={size}
          />
        </div>
      </div>
      {error && <p className="text-red-600 my-1">Do not empty</p>}
    </>
  );
};
export default EditButton;
