import statusConflictIcon from "../assets/images/status-conflict-icon.webp";

interface DuplicateEntryModalProps {
  message: string;
  onClick: () => void;
  isDisabled: boolean;
}

export default function DuplicateEntryModal({
  message,
  onClick,
  isDisabled,
}: DuplicateEntryModalProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-tertiary/60">
        <div className="w-[85%] pt-8 pb-8 flex flex-col items-center rounded-2xl bg-input">
          <img src={statusConflictIcon} alt="" className="size-17" />
          <h1 className="mt-2 font-playfair font-medium text-tertiary text-3xl">
            ¡Ups!
          </h1>
          <p className="mt-1 pr-2 pl-2 font-inter font-normal text-tertiary text-sm text-center">{`Ya existe un registro con el ${message} que ingresaste`}</p>
          <button
            className="mt-10 pt-3 pr-5 pb-3 pl-5 rounded-3xl font-playfair font-bold text-md text-text bg-error active:scale-95 transition-transform duration-100"
            onClick={onClick}
            disabled={!isDisabled}
          >
            INTENTAR DE NUEVO
          </button>
        </div>
      </div>
    </>
  );
}
