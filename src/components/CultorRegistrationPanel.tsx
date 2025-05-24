import "../styles/global.css";
import Loader from "./loader";
import SuccessRegistrationMessage from "./SuccessRegistrationMessage";
import Form from "./Form";
import ServerErrorMessage from "./ServerErrorMessage";
import type { Dispatch, SetStateAction } from "react";
import useCultoregistrationPanel from "../hooks/useCultorRegistrationPanel";

// Props definition for type safety and clarity
interface CultorRegistrationPanelProps {
  setIsStatusConflict: Dispatch<SetStateAction<boolean>>;
  setMessageConflict: Dispatch<SetStateAction<string>>;
}

export default function CultorRegistrationPanel({
  setIsStatusConflict,
  setMessageConflict,
}: CultorRegistrationPanelProps) {
  // Custom hook managing form state, validation, options, and submission logic
  const {
    formValues,
    formErrors,
    isLoading,
    isStatusError,
    isStatusCreated,
    municipalitiesOptions,
    artCategoriesOptions,
    availableParishes,
    availableArtDisciplines,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useCultoregistrationPanel(setIsStatusConflict, setMessageConflict);

  return (
    <>
      {/* Container with dynamic padding and height based on loading and status */}
      <div
        className={`w-full ${
          isLoading || isStatusError || isStatusCreated
            ? "pt-1 pr-7 pb-7 pl-7 h-[75vh] flex flex-col items-center justify-center gap-y-3 md:pr-20 md:pl-20 xl:pt-18 xl:pb-25 override-height"
            : "pt-10 pr-3 pb-15 pl-3 md:pt-13 md:pr-10 md:pb-18 md:pl-10 xl:pt-18 xl:pr-15 xl:pb-22 xl:pl-15"
        } rounded-4xl bg-[#f3f3f3]/5 backdrop-blur-xs shadow-2xl md:rounded-[2.25rem] xl:w-[85%] xl:rounded-[2.5rem]`}
      >
        {/* Show loader while submitting */}
        {isLoading && <Loader />}

        {/* Show error message if server error occurs */}
        {isStatusError && <ServerErrorMessage />}

        {/* Show success message after successful submission */}
        {isStatusCreated && <SuccessRegistrationMessage />}

        {/* Show form when not loading, error, or success */}
        {!isLoading && !isStatusError && !isStatusCreated && (
          <Form
            formValues={formValues}
            formErrors={formErrors}
            municipalitiesOptions={municipalitiesOptions}
            artCategoriesOptions={artCategoriesOptions}
            availableParishes={availableParishes}
            availableArtDisciplines={availableArtDisciplines}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
}
