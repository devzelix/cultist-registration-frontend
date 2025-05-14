import type { ChangeEvent, FocusEvent } from "react";

interface ConditionalInputProps {
  width: string;
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
  onFocus: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function ConditionalInput({
  width,
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
  onFocus,
}: ConditionalInputProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2 md:w-[48%]`}>
        <label
          htmlFor=""
          className="font-inter font-medium text-text md:text-xl"
        >
          {label}
        </label>
        <div className="flex justify-between gap-x-3">
          <div className="w-1/4 flex justify-around gap-x-2 md:gap-x-3">
            <div className="width-[45%] flex items-center gap-x-0.5 md:gap-x-1">
              <label
                htmlFor={`${groupName}-yes`}
                className="font-inter font-medium text-text md:text-lg"
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
              />
            </div>
            <div className="width-[45%] flex items-center gap-x-0.5 md:gap-x-1">
              <label
                htmlFor={`${groupName}-no`}
                className="font-inter font-medium text-text md:text-lg"
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
                  ? "outline-2 outline-error border-error"
                  : "border-input"
              } rounded-xl font-inter font-normal bg-input focus:outline-2 focus:outline-secondary focus:border-secondary placeholder:font-inter placeholder:font-normal placeholder:text-placeholder md:h-13 md:pr-10 md:border-3 md:rounded-2xl md:text-lg`}
              disabled={disabled}
              value={inputValue}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <img
              src={icon}
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 md:size-6 md:top-[49%]"
            />
            <p
              id={`${idInput}Error`}
              className="absolute -bottom-5 left-1 font-inter font-medium text-sm text-error"
            >
              {error}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
