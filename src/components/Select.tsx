import type { Option } from "../utils/interfaces";

interface SelectProps {
  id: string;
  name: string;
  label: string;
  defaultOption: string;
  options: Option[];
  width: string;
  error: string;
}

export default function Select({
  id,
  name,
  label,
  defaultOption,
  options,
  width,
  error,
}: SelectProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor={id} className="font-inter font-medium text-text">
          {label}
        </label>
        <div className="flex flex-col gap-y-0.5">
          <select
            name={name}
            id={id}
            className="h-11 pt-2 pb-2 pl-2.5 border-2 rounded-xl border-input font-inter font-normal text-placeholder bg-input focus:outline-2 focus:outline-secondary focus:border-secondary"
          >
            <option value="" className="text-placeholder" disabled selected>
              {defaultOption}
            </option>
            {options.map((option) => (
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
