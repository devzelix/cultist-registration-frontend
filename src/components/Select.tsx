import type { ChangeEvent, FocusEvent } from "react";
import type { Option } from "../utils/interfaces";

interface SelectProps {
  id: string;
  name: string;
  label: string;
  defaultOption: string;
  options: Option[] | undefined;
  disabled?: boolean;
  width: string;
  error: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: FocusEvent<HTMLSelectElement>) => void;
  onFocus: (e: FocusEvent<HTMLSelectElement>) => void;
}

export default function Select({
  id,
  name,
  label,
  defaultOption,
  options,
  disabled,
  width,
  error,
  value,
  onChange,
  onBlur,
  onFocus,
}: SelectProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2 md:w-[48%]`}>
        <label
          htmlFor={id}
          className="font-inter font-medium text-text md:text-xl"
        >
          {label}
        </label>
        <div className="relative flex flex-col gap-y-0.5">
          <select
            name={name}
            id={id}
            className={`h-11 pt-2 pb-2 pl-2.5 border-2 rounded-xl ${
              error !== ""
                ? "outline-2 outline-error border-error"
                : "border-input"
            } font-inter font-normal ${
              value === "0" ? "text-placeholder" : "text-tertiary"
            } bg-input focus:outline-2 focus:outline-secondary focus:border-secondary md:h-13 md:border-3 md:rounded-2xl md:text-lg`}
            disabled={typeof disabled === "undefined" ? false : disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          >
            <option value="0" className="text-placeholder" disabled>
              {defaultOption}
            </option>
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
          <p
            id={`${id}Error`}
            className="absolute -bottom-6 left-1 font-inter font-medium text-sm text-error md:text-[0.97rem] md:-bottom-[1.8rem]"
          >
            {error}
          </p>
        </div>
      </div>
    </>
  );
}
