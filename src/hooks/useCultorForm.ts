import { useState, type ChangeEvent, type FocusEvent } from "react";
import type { FormValues, FormErrors } from "../utils/interfaces";
import { initialFormValues, initialFormErrors } from "../utils/initialForm";
import { parishOptions, artDisciplinesOptions } from "../utils/formOptions";
import useDependentOptions from "./useDependentOptions";
import useRestartConditionalInput from "./useRestartConditionalInput";
import handleFieldChange from "../utils/handleFieldChange";
import handleFieldBlur from "../utils/handleFieldBlur";
import handleFieldFocus from "../utils/handleFieldFocus";

export default function useCultorForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

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

  return {
    formValues,
    formErrors,
    availableParishes,
    availableArtDisciplines,
    handleChange: onChange,
    handleBlur: onBlur,
    handleFocus: onFocus,
  };
}
