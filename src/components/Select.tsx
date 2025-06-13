import type { ChangeEvent, FocusEvent } from "react";
import type { Option } from "../utils/interfaces";

// Props definition for type safety and clarity
interface SelectProps {
  idSelect: string;
  nameSelect: string;
  idInput?: string;
  nameInput?: string;
  label: string;
  placeholder?: string;
  defaultOption: string;
  options: Option[] | undefined;
  icon?: string;
  disabled?: boolean;
  isOther?: boolean;
  errorSelect: string;
  errorInput?: string;
  valueSelect: string;
  valueInput?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

export default function Select({
  idSelect,
  nameSelect,
  idInput,
  nameInput,
  label,
  placeholder,
  defaultOption,
  options,
  icon,
  disabled,
  isOther,
  errorSelect,
  errorInput,
  valueSelect,
  valueInput,
  onChange,
  onBlur,
}: SelectProps) {
  return (
    <>
      {/* Container with responsive spacing */}
      <div className="w-full flex flex-col gap-y-2 md:gap-y-3 xl:gap-y-4 xl:w-[46%]">
        {/* Accessible label linked to the select by id */}
        <label
          htmlFor={idSelect}
          className="font-inter font-medium text-text md:text-2xl xl:text-3xl"
        >
          {label}
        </label>
        <div className={`flex justify-between`}>
            <div className={`relative ${isOther ? "w-[27%]" : "w-full"} flex flex-col gap-y-0.5`}>
              {/* Select input with conditional styles for error and value state */}
              <select
                name={nameSelect}
                id={idSelect}
                className={`h-11 pl-2 border-2 rounded-xl ${
                  errorSelect !== ""
                    ? "border-error outline-error"
                    : " border-input outline-input"
                } bg-input font-inter font-normal focus:outline-[2.85px] focus:outline-secondary focus:border-secondary ${
                  valueSelect === "0" ? "text-placeholder" : "text-tertiary"
                } md:h-16 md:pl-3 md:border-4 md:rounded-2xl md:text-2xl md:focus:outline-[3.25px]`}
                disabled={typeof disabled === "undefined" ? false : disabled}
                value={valueSelect}
                onChange={onChange}
                onBlur={onBlur}
              >
                {/* Default placeholder option */}
                <option value="0" className="text-placeholder" disabled>
                  {defaultOption}
                </option>

                {/* Dynamically render select options */}
                {options &&
                  options.map((option) => (
                    <option
                      key={option.key}
                      value={option.value}
                      className="text-tertiary"
                    >
                      {option.option}
                    </option>
                  ))}
              </select>

              {/* Error message display */}
              <p
                id={`${idSelect}Error`}
                className="absolute -bottom-6 left-1 font-inter font-medium text-sm text-error md:-bottom-8 md:text-xl"
              >
                {errorSelect}
              </p>
            </div>
            {isOther && (<>
              <div className="relative w-[70%]">
                <input
                  type="text"
                  name={nameInput}
                  id={idInput}
                  placeholder={placeholder}
                  className={`w-full h-11 pt-2 pr-9 pb-2 pl-2.5 border-2 ${
                    errorInput !== ""
                      ? "border-error outline-error"
                      : " border-input outline-input "
                  } bg-input rounded-xl font-inter font-normal placeholder:font-inter placeholder:font-normal placeholder:text-placeholder focus:outline-[2.85px] focus:outline-secondary focus:border-secondary md:h-16 md:pt-4 md:pr-13 md:pb-4 md:pl-4.5 md:border-4 md:rounded-2xl md:text-2xl md:focus:outline-[3.25px]`}
                  aria-describedby={`${idInput}Error`} // Links input to error message for accessibility
                  value={valueInput}
                  onChange={onChange}
                  onBlur={onBlur}
                />

                {/* Decorative icon inside input */}
                {icon !== "" && (
                  <img
                    src={icon}
                    alt=""
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 md:right-5 md:top-1/2 md:size-7"
                  />
                )}

                {/* Error message */}
                <p
                  id={`${idInput}Error`}
                  className="absolute -bottom-6 left-1 font-inter font-medium text-sm text-error md:-bottom-8 md:text-xl"
                >
                  {errorInput}
                </p>
              </div>
            </>)}
        </div>
      </div>
    </>
  );
}
