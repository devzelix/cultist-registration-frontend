import "./input.css";

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  label: string;
  width: string;
}

export default function Input({
  type,
  placeholder,
  id,
  name,
  label,
  width,
}: InputProps) {
  return (
    <>
      <div className={`${width} flex flex-col gap-y-2`}>
        <label htmlFor={id} className="text-white font-bold">
          {label}
        </label>
        <div className="flex flex-col gap-y-0.5">
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            className="h-11 pt-2 pb-2 pl-2.5 border-2 rounded-[10px] border-[#f3f3f3] bg-white focus:outline-2 focus:outline-[#fc5e03] focus:border-[#fc5e03]"
          />
          <p className="pl-1 font-bold text-red-600 hidden">
            Esto es un error! ! !
          </p>
        </div>
      </div>
    </>
  );
}
