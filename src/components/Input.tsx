import type { ChangeEvent, FocusEvent } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  min?: string;
  max?: string;
  id: string;
  name: string;
  label: string;
  icon?: string;
  error?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  placeholder,
  min,
  max,
  id,
  name,
  label,
  icon,
  error,
  value,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <>
      <div className="w-full flex flex-col gap-y-2 md:gap-y-3">
        <label
          htmlFor={id}
          className="font-inter font-medium text-text md:text-2xl"
        >
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            placeholder={
              type === "text" || type === "email" ? placeholder : undefined
            }
            min={type === "date" || type === "number" ? min : undefined}
            max={type === "date" || type === "number" ? max : undefined}
            id={id}
            name={name}
            className={`appearance-none h-11 w-full pt-2 ${
              type === "date" || type === "number" ? "pr-2.5" : "pr-9 md:pr-13"
            } pb-2 pl-2.5 border-2 rounded-xl font-inter font-normal text-tertiary ${
              error !== ""
                ? "border-error outline-error"
                : " border-input outline-input"
            } bg-input placeholder:font-inter placeholder:font-normal placeholder:text-placeholder focus:outline-[2.85px] focus:outline-secondary focus:border-secondary md:h-16 md:pt-4 md:pb-4 md:pl-4.5 md:border-4 md:rounded-2xl md:text-2xl md:focus:outline-[3.25px]`}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {icon && (
            <img
              src={icon}
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 md:right-5 md:top-1/2 md:size-7"
            />
          )}

          {error && (
            <p
              id={`${id}Error`}
              className="absolute -bottom-6 left-1 font-inter text-sm font-medium text-error md:-bottom-8 md:text-xl"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
