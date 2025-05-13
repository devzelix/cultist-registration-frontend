import type { ChangeEvent } from "react";
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
}: SelectProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor={id} className="font-inter font-medium text-text">
          {label}
        </label>
        <div className="relative flex flex-col gap-y-0.5">
          <select
            name={name}
            id={id}
            className={`h-11 pt-2 pb-2 pl-2.5 border-2 rounded-xl border-input font-inter font-normal ${
              value === "0" ? "text-placeholder" : "text-tertiary"
            } bg-input focus:outline-2 focus:outline-secondary focus:border-secondary`}
            disabled={typeof disabled === "undefined" ? false : disabled}
            value={value}
            onChange={onChange}
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
          <p className="absolute -bottom-6 left-1 font-inter font-medium text-sm text-error hidden">
            {error}
          </p>
        </div>
      </div>
    </>
  );
}
