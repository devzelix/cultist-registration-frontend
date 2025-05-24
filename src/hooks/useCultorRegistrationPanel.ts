import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FocusEvent,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { FormValues, FormErrors } from "../utils/interfaces";
import { initialFormValues, initialFormErrors } from "../utils/initialForm";
import useDependentOptions from "./useDependentOptions";
import useRestartConditionalInput from "./useRestartConditionalInput";
import handleFieldChange from "../utils/handleFieldChange";
import handleFieldBlur from "../utils/handleFieldBlur";
import handleFormSubmit from "../utils/handleFormSubmit";
import useMunicipalitiesOptions from "./useMunicipalitiesOptions";
import useParishesOptions from "./useParishesOptions";
import useArtCategoriesOptions from "./useArtCategoriesOption";
import useArtDisciplinesOptions from "./useArtDisciplinesOptions";

/**
 * Custom hook to manage the state and behavior of the Cultor registration panel form.
 *
 * @param setIsStatusConflict - Setter to toggle conflict status modal.
 * @param setMessageConflict - Setter to update conflict message.
 * @returns Various state variables and handler functions used in the form.
 */
export default function useCultoregistrationPanel(
  setIsStatusConflict: Dispatch<SetStateAction<boolean>>,
  setMessageConflict: Dispatch<SetStateAction<string>>
) {
  // State for form values and validation errors
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  // Loading and status flags for async operations
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isStatusError, setIsStatusError] = useState<boolean>(false);
  const [isStatusCreated, setIsStatusCreated] = useState<boolean>(false);

  // Fetch options for select inputs via custom hooks
  const municipalitiesOptions = useMunicipalitiesOptions(
    setIsLoading,
    setIsStatusError
  );

  const parishesOptions = useParishesOptions(setIsLoading, setIsStatusError);

  const artCategoriesOptions = useArtCategoriesOptions(
    setIsLoading,
    setIsStatusError
  );

  const artDisciplinesOptions = useArtDisciplinesOptions(
    setIsLoading,
    setIsStatusError
  );

  // Compute dependent options based on selected municipality and art category
  const availableParishes = useDependentOptions(
    parishesOptions,
    formValues.municipalityId,
    setFormValues,
    "parishId"
  );

  const availableArtDisciplines = useDependentOptions(
    artDisciplinesOptions,
    formValues.artCategoryId,
    setFormValues,
    "artDisciplineId"
  );

  // Reset conditional inputs when related values change
  useRestartConditionalInput(
    formValues.hasDisability,
    setFormValues,
    setFormErrors,
    "disability",
    "disabilityError"
  );

  useRestartConditionalInput(
    formValues.hasIllness,
    setFormValues,
    setFormErrors,
    "illness",
    "illnessError"
  );

  // Event handlers for form inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    handleFieldChange(e, formErrors, setFormValues, setFormErrors);

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    handleFieldBlur(e, setFormErrors);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>
    handleFormSubmit(
      e,
      formValues,
      setFormErrors,
      setIsLoading,
      setIsStatusError,
      setIsStatusCreated,
      setIsStatusConflict,
      setMessageConflict
    );

  return {
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
  };
}
