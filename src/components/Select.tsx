import type { ChangeEvent, FocusEvent } from "react";
import type { Option } from "../utils/interfaces";

// Props definition for type safety and clarity
interface SelectProps {
  id: string;
  name: string;
  label: string;
  defaultOption: string;
  options: Option[] | undefined;
  disabled?: boolean;
  error: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: FocusEvent<HTMLSelectElement>) => void;
}

export default function Select({
  id,
  name,
  label,
  defaultOption,
  options,
  disabled,
  error,
  value,
  onChange,
  onBlur,
}: SelectProps) {
  return (
    <>
      {/* Container with responsive spacing */}
      <div className="w-full flex flex-col gap-y-2 md:gap-y-3 xl:gap-y-4 xl:w-[46%]">
        {/* Accessible label linked to the select by id */}
        <label
          htmlFor={id}
          className="font-inter font-medium text-text md:text-2xl xl:text-3xl"
        >
          {label}
        </label>

        <div className="relative flex flex-col gap-y-0.5">
          {/* Select input with conditional styles for error and value state */}
          <select
            name={name}
            id={id}
            className={` h-11 pl-2 border-2 rounded-xl ${
              error !== ""
                ? "border-error outline-error"
                : " border-input outline-input"
            } bg-input font-inter font-normal focus:outline-[2.85px] focus:outline-secondary focus:border-secondary ${
              value === "0" ? "text-placeholder" : "text-tertiary"
            } md:h-16 md:pl-3 md:border-4 md:rounded-2xl md:text-2xl md:focus:outline-[3.25px]`}
            disabled={typeof disabled === "undefined" ? false : disabled}
            value={value}
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
            id={`${id}Error`}
            className="absolute -bottom-6 left-1 font-inter font-medium text-sm text-error md:-bottom-8 md:text-xl"
          >
            {error}
          </p>
        </div>
      </div>
    </>
  );
}
