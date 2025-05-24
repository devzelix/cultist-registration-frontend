import statusConflictIcon from "../assets/images/status-conflict-icon.webp";

// Props definition for type safety and clarity
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
      {/* Modal backdrop with semi-transparent overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-tertiary/60">
        <div className="w-[85%] pt-8 pb-8 flex flex-col items-center rounded-2xl bg-input md:w-[70%] md:pt-15 md:pb-15 md:rounded-3xl xl:w-2/5 xl:pt-12 xl:pb-12">
          {/* Status icon */}
          <img src={statusConflictIcon} alt="" className="size-17 md:size-20" />

          {/* Modal heading */}
          <h1 className="mt-2 font-playfair font-medium text-tertiary text-3xl md:text-5xl">
            ¡Ups!
          </h1>

          {/* Informative message about the duplicate entry */}
          <p className="mt-1 pr-2 pl-2 font-inter font-normal text-tertiary text-sm text-center md:mt-3 md:p-0 md:text-lg xl:text-xl">
            {`A record with the ${message} you entered already exists`}
          </p>

          {/* Retry button, disabled based on isDisabled */}
          <button
            className="mt-10 pt-3 pr-5 pb-3 pl-5 rounded-3xl font-playfair font-bold text-md text-text bg-error active:scale-95 transition-transform duration-100 md:mt-11 md:pt-5 md:pr-7 md:pb-5 md:pl-7 md:rounded-4xl md:text-2xl"
            onClick={onClick}
            disabled={!isDisabled}
          >
            E N V I A R
          </button>
        </div>
      </div>
    </>
  );
}
