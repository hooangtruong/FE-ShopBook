import React, { useState } from "react";

interface InputProps {
  label: string;
  name: string;
  register: any;
  errors: any;
  placeholder?: string;
  errorsOption?: any;
  classLabel: string;
  classInput: string;
  type: string;
  defaultValue?: string | number;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  errors,
  placeholder = "Loading ...",
  errorsOption,
  classLabel,
  classInput,
  defaultValue,
  type,
}) => {
  const keys = errorsOption ? Object.keys(errorsOption) : [];

  const [inputValue, setInputValue] = useState(defaultValue || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label className={classLabel} htmlFor={name}>
        {label}
      </label>
      <input
        className={classInput}
        id={name}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        {...register(name, {
          ...errorsOption,
          valueAsNumber: type === "number",
        })}
        onChange={handleInputChange}
      />
      {keys.map((items) => (
        <>
          {errors?.[name]?.type === items && (
            <p key={items} className="text-red-600 mt-3">
              {errors?.[name]?.message}
            </p>
          )}
        </>
      ))}
    </div>
  );
};
export default Input;
