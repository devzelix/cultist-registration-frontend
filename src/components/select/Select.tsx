import "./select.css";
import type { Option } from "../../utils/interfaces";

interface SelectProps {
  id: string;
  name: string;
  label: string;
  defaultOption: string;
  options: Option[];
  width: string;
}

export default function Select({
  id,
  name,
  label,
  defaultOption,
  options,
  width,
}: SelectProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor={id} className="text-black font-bold">
          {label}
        </label>
        <div className="flex flex-col gap-y-0.5">
          <select
            name={name}
            id={id}
            className="pt-2 pb-2 pl-2.5 border-[2px] rounded-[10px] border-black bg-white text-gray-400 focus:outline-2 focus:outline-[#234997] focus:border-[#234997]"
          >
            <option value="" className="text-gray-400">
              {defaultOption}
            </option>
            {options.map((option) => (
              <option
                key={option.key}
                value={option.value}
                className="text-black"
              >
                {option.option}
              </option>
            ))}
          </select>
          <p className="text-red-600" hidden>
            Esto es un error! ! !
          </p>
        </div>
      </div>
    </>
  );
}
