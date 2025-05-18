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
}: ConditionalInputProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor="" className="font-inter font-medium text-text">
          {label}
        </label>
        <div className="flex justify-between gap-x-3">
          <div className="w-1/4 flex justify-around gap-x-2">
            <div className="width-[45%] flex items-center gap-x-0.5">
              <label
                htmlFor={`${groupName}-yes`}
                className="font-inter font-medium text-text"
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
            <div className="width-[45%] flex items-center gap-x-0.5">
              <label
                htmlFor={`${groupName}-no`}
                className="font-inter font-medium text-text"
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
                  ? "border-error outline-error"
                  : " border-input outline-input "
              } bg-input outline-[0.05px] rounded-xl font-inter font-normal placeholder:font-inter placeholder:font-normal placeholder:text-placeholder focus:outline-[2.85px] focus:outline-secondary focus:border-secondary`}
              disabled={disabled}
              value={inputValue}
              onChange={onChange}
              onBlur={onBlur}
            />
            <img
              src={icon}
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5"
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
