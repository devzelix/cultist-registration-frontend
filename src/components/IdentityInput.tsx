import type { ChangeEvent } from "react";
import type { Option } from "../utils/interfaces";

interface IdentityInputProps {
  idSelect: string;
  nameSelect: string;
  idInput: string;
  nameInput: string;
  labelSelect: string;
  labelInput: string;
  placeholder: string;
  options: Option[];
  width: string;
  icon: string;
  error: string;
  valueSelect: string;
  valueInput: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function IdentityInput({
  idSelect,
  nameSelect,
  idInput,
  nameInput,
  labelSelect,
  labelInput,
  placeholder,
  options,
  width,
  icon,
  error,
  valueSelect,
  valueInput,
  onChange,
}: IdentityInputProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor={idSelect} className="font-inter font-medium text-text">
          {labelInput}
        </label>
        <div className="flex justify-between">
          <select
            name={nameSelect}
            id={idSelect}
            className="w-1/4 h-11 pt-2 pb-2 pl-2.5 border-2 border-input rounded-xl font-inter font-normal bg-input focus:outline-2 focus:outline-secondary focus:border-secondary"
            aria-label={labelSelect}
            value={valueSelect}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.key} value={option.value}>
                {option.option}
              </option>
            ))}
          </select>
          <div className="w-[73%] relative">
            <input
              type="text"
              name={nameInput}
              id={idInput}
              placeholder={placeholder}
              className="w-full h-11 pt-2 pr-9 pb-2 pl-2.5 border-2 border-input rounded-xl font-inter font-normal bg-input focus:outline-2 focus:outline-secondary focus:border-secondary placeholder:font-inter placeholder:font-normal placeholder:text-placeholder"
              aria-describedby={`${idInput}Error`}
              value={valueInput}
              onChange={onChange}
            />
            {icon !== "" && (
              <img
                src={icon}
                alt=""
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            )}
            <p
              id={`${idInput}Error`}
              className="absolute -bottom-6 left-1 font-inter font-medium text-sm text-error hidden"
            >
              {error}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
