import type { Option } from "../../utils/interfaces";

interface InputPhoneProps {
  idPrefix: string;
  namePrefix: string;
  idNumber: string;
  nameNumber: string;
  label: string;
  placeholder: string;
  options: Option[];
  width: string;
}

export default function InputPhone({
  idPrefix,
  namePrefix,
  idNumber,
  nameNumber,
  label,
  placeholder,
  options,
  width,
}: InputPhoneProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor={idPrefix} className="text-black font-bold">
          {label}
        </label>
        <div className="flex justify-between">
          <select
            name={namePrefix}
            id={idPrefix}
            className="w-[25%] pt-2 pb-2 pl-2.5 border-2 rounded-[10px] border-black bg-white focus:outline-2 focus:outline-[#234997] focus:border-[#234997]"
          >
            {options.map((option) => (
              <option key={option.key} value={option.value}>
                {option.option}
              </option>
            ))}
          </select>
          <div className="w-[73%]">
            <input
              type="text"
              name={nameNumber}
              id={idNumber}
              placeholder={placeholder}
              className="w-[100%] pt-2 pb-2 pl-2.5 border-2 rounded-[10px] border-black bg-white focus:outline-2 focus:outline-[#234997] focus:border-[#234997]"
            />
            <p className="text-red-600" hidden>
              Esto es un error ! ! !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
