import useCultorForm from "../hooks/useCultorForm";
import "../styles/global.css";
import Loader from "./loader";
import SuccessRegistrationMessage from "./SuccessRegistrationMessage";
import Form from "./Form";
import ServerErrorMessage from "./ServerErrorMessage";
import type { Dispatch, SetStateAction } from "react";

interface cultorFormProps {
  setIsStatusConflict: Dispatch<SetStateAction<boolean>>;
  setMessageConflict: Dispatch<SetStateAction<string>>;
}

export default function CultorForm({
  setIsStatusConflict,
  setMessageConflict,
}: cultorFormProps) {
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
  } = useCultorForm(setIsStatusConflict, setMessageConflict);

  return (
    <>
      <div
        className={`w-full ${
          isLoading || isStatusError || isStatusCreated
            ? "pt-1 pr-7 pb-7 pl-7 h-[75vh] flex flex-col items-center justify-center gap-y-3"
            : "pt-10 pr-3 pb-15 pl-3"
        } rounded-4xl bg-[#f3f3f3]/5 backdrop-blur-xs shadow-2xl`}
      >
        {isLoading && <Loader />}
        {isStatusError && <ServerErrorMessage />}
        {isStatusCreated && <SuccessRegistrationMessage />}
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
