interface InputProps {
  type: string;
  placeholder?: string;
  min?: string;
  max?: string;
  id: string;
  name: string;
  label: string;
  width: string;
  icon?: string;
  error?: string;
}

export default function Input({
  type,
  placeholder,
  min,
  max,
  id,
  name,
  label,
  width,
  icon,
  error,
}: InputProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor={id} className="font-inter font-medium text-text">
          {label}
        </label>
        <div className="relative flex flex-col gap-y-0.5">
          <input
            type={type}
            placeholder={
              type === "text" || type === "email" ? placeholder : undefined
            }
            min={type === "date" || type === "number" ? min : undefined}
            max={type === "date" || type === "number" ? max : undefined}
            id={id}
            name={name}
            defaultValue={
              type === "date" || type === "number"
                ? type === "date"
                  ? max
                  : min
                : undefined
            }
            className="h-11 pt-2 pb-2 pl-2.5 w-full border-2 rounded-xl font-inter font-normal border-input bg-input focus:outline-2 focus:outline-secondary focus:border-secondary placeholder:font-inter placeholder:font-normal placeholder:color-placeholder"
            aria-describedby={`${id}Error`}
          />
          {icon && (
            <img
              src={icon}
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          )}

          {error && (
            <p
              id={`${id}Error`}
              className="absolute -bottom-6 left-1 font-inter text-sm font-medium text-error hidden"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
