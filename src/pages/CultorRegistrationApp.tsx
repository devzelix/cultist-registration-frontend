import { useEffect } from "react";
import facebook from "../assets/images/facebook-icon.webp";
import instagram from "../assets/images/instagram-icon.webp";
import web from "../assets/images/web-icon.webp";
import CultorRegistrationPanel from "../components/CultorRegistrationPanel";
import DuplicateEntryModal from "../components/DuplicateEntryModal";
import useModal from "../hooks/useModal";

/**
 * Main application component.
 *
 * Handles the conflict modal logic and renders:
 * - The duplicate entry modal when a conflict occurs.
 * - The cultor registration panel.
 * - The footer with social media and website links.
 */
export default function CultorRegistrationApp() {
  useEffect(() => {
    document.title = "Registro de Cultores - Secretaría de Cultura de Carabobo";
  }, []);

  // Custom hook to manage the state of the conflict modal
  const {
    isStatusConflict,
    setIsStatusConflict,
    messageConflict,
    setMessageConflict,
    focusConflictField,
  } = useModal();

  return (
    <>
      {/* Modal that appears when there is a data conflict */}
      {isStatusConflict && (
        <DuplicateEntryModal
          message={messageConflict}
          onClick={focusConflictField}
          isDisabled={isStatusConflict}
        />
      )}

      {/* Main area with the registration form */}
      <main className="w-full pt-9 pr-1 pb-10 pl-1 flex items-center justify-center bg-primary md:pt-15 md:pr-3 md:pb-17 md:pl-3 xl:pt-25 xl:pb-28">
        <CultorRegistrationPanel
          setIsStatusConflict={setIsStatusConflict}
          setMessageConflict={setMessageConflict}
        />
      </main>

      {/* Footer with icons and links to social media and website */}
      <footer className="p-10 flex flex-col items-center justify-center gap-y-8 bg-tertiary shadow-[-5px_-5px_10px_rgba(0,0,0,0.3)] md:p-14 md:gap-y-13">
        <div className="flex items-center justify-center gap-x-6 md:gap-x-10">
          <a
            href="https://www.facebook.com/culturacarabobotequiero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="facebook logo"
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
              alt="instagram logo"
              className="size-7 md:size-12"
            />
          </a>
          <a
            href="http://cultura.carabobo.gob.ve/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={web} alt="website logo" className="size-7 md:size-12" />
          </a>
        </div>
        <small className="font-inter font-medium text-text text-[0.65rem] md:text-[1rem]">
          © 2025 Secretaría de Cultura – Gobernación de Carabobo
        </small>
      </footer>
    </>
  );
}
