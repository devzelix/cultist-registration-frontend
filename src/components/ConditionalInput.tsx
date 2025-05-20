import type { ChangeEvent, FocusEvent } from "react";

interface ConditionalInputProps {
  groupName: string;
  label: string;
  idInput: string;
  nameInput: string;
  placeholder: string;
  disabled: boolean;
  icon: string;
  error: string;
  groupValue: string;
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function ConditionalInput({
  groupName,
  label,
  idInput,
  nameInput,
  placeholder,
  icon,
  error,
  disabled,
  groupValue,
  inputValue,
  onChange,
  onBlur,
}: ConditionalInputProps) {
  return (
    <>
      <div className="flex flex-col gap-y-2 md:gap-y-3.5">
        <label
          htmlFor=""
          className="font-inter font-medium text-text md:text-2xl"
        >
          {label}
        </label>
        <div className="flex justify-between gap-x-3 md:gap-x-3">
          <div className="w-1/4 flex justify-around gap-x-2 md:gap-x-1">
            <div className="width-[45%] flex items-center gap-x-0.5 md:gap-x-2">
              <label
                htmlFor={`${groupName}-yes`}
                className="font-inter font-medium text-text md:text-2xl"
              >
                Si
              </label>
              <input
                type="radio"
                id={`${groupName}-yes`}
                name={groupName}
                value="yes"
                checked={groupValue === "yes"}
                onChange={onChange}
                className="md:size-4"
              />
            </div>
            <div className="width-[45%] flex items-center gap-x-0.5 md:gap-x-2">
              <label
                htmlFor={`${groupName}-no`}
                className="font-inter font-medium text-text md:text-2xl"
              >
                No
              </label>
              <input
                type="radio"
                id={`${groupName}-no`}
                name={groupName}
                value="no"
                checked={groupValue === "no"}
                onChange={onChange}
                className="md:size-4"
              />
            </div>
          </div>
          <div className="relative w-[73%]">
            <input
              type="text"
              placeholder={placeholder}
              id={idInput}
              name={nameInput}
              className={`w-full h-11 pt-2 pr-9 pb-2 pl-2.5 border-2 ${
                error !== ""
                  ? "border-error outline-error"
                  : " border-input outline-input "
              } bg-input rounded-xl font-inter font-normal placeholder:font-inter placeholder:font-normal placeholder:text-placeholder focus:outline-[2.85px] focus:outline-secondary focus:border-secondary md:h-16 md:pt-4 md:pr-13 md:pb-4 md:pl-4.5 md:border-4 md:rounded-2xl md:text-2xl md:focus:outline-[3.25px]`}
              disabled={disabled}
              value={inputValue}
              onChange={onChange}
              onBlur={onBlur}
            />
            <img
              src={icon}
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 md:right-5 md:top-1/2 md:size-7"
            />
            <p
              id={`${idInput}Error`}
              className="absolute -bottom-5 left-1 font-inter font-medium text-sm text-error md:-bottom-8 md:text-xl"
            >
              {error}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
