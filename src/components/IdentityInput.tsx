import type { ChangeEvent, FocusEvent } from "react";
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
  icon: string;
  error: string;
  valueSelect: string;
  valueInput: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
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
  icon,
  error,
  valueSelect,
  valueInput,
  onChange,
  onBlur,
}: IdentityInputProps) {
  return (
    <>
      <div className="w-full flex flex-col gap-y-2 md:gap-y-3 xl:w-[46%] xl:gap-y-4">
        <label
          htmlFor={idSelect}
          className="font-inter font-medium text-text md:text-2xl xl:text-3xl"
        >
          {labelInput}
        </label>
        <div className="flex justify-between">
          <select
            name={nameSelect}
            id={idSelect}
            className="w-1/4 h-11 pt-2 pb-2 pl-2.5 border-2 border-input rounded-xl font-inter font-normal bg-input focus:outline-[2.75px] focus:outline-secondary focus:border-secondary md:h-16 md:pt-3 md:pb-3 md:pl-4.5 md:border-4 md:rounded-2xl md:text-2xl md:focus:outline-[3.25px]"
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
          <div className="relative w-[73%]">
            <input
              type="text"
              name={nameInput}
              id={idInput}
              placeholder={placeholder}
              className={`w-full h-11 pt-2 pr-9 pb-2 pl-2.5 border-2 ${
                error !== ""
                  ? "border-error outline-error"
                  : " border-input outline-input "
              } bg-input rounded-xl font-inter font-normal placeholder:font-inter placeholder:font-normal placeholder:text-placeholder focus:outline-[2.85px] focus:outline-secondary focus:border-secondary md:h-16 md:pt-4 md:pr-13 md:pb-4 md:pl-4.5 md:border-4 md:rounded-2xl md:text-2xl md:focus:outline-[3.25px]`}
              aria-describedby={`${idInput}Error`}
              value={valueInput}
              onChange={onChange}
              onBlur={onBlur}
            />
            {icon !== "" && (
              <img
                src={icon}
                alt=""
                className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 md:right-5 md:top-1/2 md:size-7"
              />
            )}
            <p
              id={`${idInput}Error`}
              className="absolute -bottom-6 left-1 font-inter font-medium text-sm text-error md:-bottom-8 md:text-xl"
            >
              {error}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
