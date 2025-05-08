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
        <label htmlFor={id} className="text-black font-bold">
          {label}
        </label>
        <div className="flex flex-col gap-y-0.5">
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            className="pt-2 pb-2 pl-2.5 border-2 rounded-[10px] border-black bg-white focus:outline-2 focus:outline-[#234997] focus:border-[#234997]"
          />
          <p className="text-red-600" hidden>
            Esto es un error! ! !
          </p>
        </div>
      </div>
    </>
  );
}
