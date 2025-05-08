import { type ChangeEventHandler } from "react";
import type { Option } from "../../utils/interfaces";

interface InputPhoneProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  idPrefix: string;
  namePrefix: string;
  idNumber: string;
  nameNumber: string;
  labelPrefix: string;
  labelNumber: string;
  placeholder: string;
  options: Option[];
  width: string;
  error: string;
}

export default function InputPhone({
  value,
  onChange,
  idPrefix,
  namePrefix,
  idNumber,
  nameNumber,
  labelPrefix,
  labelNumber,
  placeholder,
  options,
  width,
  error,
}: InputPhoneProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor={idPrefix} className="text-[#f3f3f3] font-bold">
          {labelNumber}
        </label>
        <div className="flex justify-between">
          <select
            name={namePrefix}
            id={idPrefix}
            className="w-[25%] h-11 pt-2 pb-2 pl-2.5 border-2 border-[#f3f3f3] rounded-[10px] bg-white focus:outline-2 focus:outline-[#fc5e03] focus:border-[#fc5e03]"
            aria-label={labelPrefix}
            aria-requerid
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
              name={nameNumber}
              id={idNumber}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="w-[100%] h-11 pt-2 pb-2 pl-2.5 border-2 border-[#f3f3f3] rounded-[10px] bg-white focus:outline-2 focus:outline-[#fc5e03] focus:border-[#fc5e03]"
              aria-requerid
            />
            <p className="absolute text-red-600" hidden>
              {error}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
