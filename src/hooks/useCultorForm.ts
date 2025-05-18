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

export default function useCultorForm(
  setIsStatusConflict: Dispatch<SetStateAction<boolean>>,
  setMessageConflict: Dispatch<SetStateAction<string>>
) {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isStatusError, setIsStatusError] = useState<boolean>(false);
  const [isStatusCreated, setIsStatusCreated] = useState<boolean>(false);

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
