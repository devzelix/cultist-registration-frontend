import facebook from "../assets/images/facebook-icon.webp";
import instagram from "../assets/images/instagram-icon.webp";
import web from "../assets/images/web-icon.webp";
import CultorForm from "../components/CultorRegistrationPanel";
import DuplicateEntryModal from "../components/DuplicateEntryModal";
import useModal from "../hooks/useModal";

export default function App() {
  const {
    isStatusConflict,
    setIsStatusConflict,
    messageConflict,
    setMessageConflict,
    focusConflictField,
  } = useModal();
  return (
    <>
      {isStatusConflict && (
        <DuplicateEntryModal
          message={messageConflict}
          onClick={focusConflictField}
          isDisabled={isStatusConflict}
        />
      )}
      <main className="w-full pt-9 pr-1 pb-10 pl-1 flex items-center justify-center bg-primary md:pt-15 md:pr-3 md:pb-17 md:pl-3 xl:pt-25 xl:pb-28">
        <CultorForm
          setIsStatusConflict={setIsStatusConflict}
          setMessageConflict={setMessageConflict}
        />
      </main>
      <footer className="p-10 flex flex-col items-center justify-center gap-y-8 bg-tertiary shadow-[-5px_-5px_10px_rgba(0,0,0,0.3)] md:p-14 md:gap-y-13">
        <div className="flex items-center justify-center gap-x-6 md:gap-x-10">
          <a
            href="https://www.facebook.com/culturacarabobotequiero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="logo de instagram"
              className="size-7 md:size-12"
            />
          </a>
          <a
            href="https://www.instagram.com/secretaria_cult"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="logo de instagram"
              className="size-7 md:size-12"
            />
          </a>
          <a
            href="http://cultura.carabobo.gob.ve/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={web}
              alt="logo de instagram"
              className="size-7 md:size-12"
            />
          </a>
        </div>
        <small className="font-inter font-medium text-text text-[0.65rem] md:text-[1rem]">
          © 2025 Secretaría de Cultura – Gobernación de Carabobo
        </small>
      </footer>
    </>
  );
}
