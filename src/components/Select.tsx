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
        <label htmlFor={id} className="text-[#f3f3f3] font-bold">
          {label}
        </label>
        <div className="flex flex-col gap-y-0.5">
          <select
            name={name}
            id={id}
            className="h-11 pt-2 pb-2 pl-2.5 border-[2px] rounded-[10px] border-[#f3f3f3] bg-white text-gray-400 focus:outline-2 focus:outline-[#fc5e03] focus:border-[#fc5e03]"
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
