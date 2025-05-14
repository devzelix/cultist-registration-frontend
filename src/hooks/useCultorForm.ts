import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";
import type { FormValues, FormErrors } from "../utils/interfaces";
import { initialFormValues, initialFormErrors } from "../utils/initialForm";
import { parishOptions, artDisciplinesOptions } from "../utils/formOptions";
import useDependentOptions from "./useDependentOptions";
import useRestartConditionalInput from "./useRestartConditionalInput";
import handleFieldChange from "../utils/handleFieldChange";
import handleFieldBlur from "../utils/handleFieldBlur";
import handleFieldFocus from "../utils/handleFieldFocus";
import handleFormSubmit from "../utils/handleFormSubmit";

export default function useCultorForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const availableParishes = useDependentOptions(
    parishOptions,
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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    handleFieldChange(e, setFormValues);

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    handleFieldBlur(e, setFormErrors);

  const onFocus = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    handleFieldFocus(e, setFormErrors);

  const onSubmit = (e: FormEvent<HTMLFormElement>) =>
    handleFormSubmit(e, formValues, formErrors, setFormErrors, setIsLoading);

  return {
    formValues,
    formErrors,
    isLoading,
    availableParishes,
    availableArtDisciplines,
    handleChange: onChange,
    handleBlur: onBlur,
    handleFocus: onFocus,
    handleSubmit: onSubmit,
  };
}
