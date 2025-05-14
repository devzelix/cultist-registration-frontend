import { useState } from "react";
import type { FormValues } from "../utils/interfaces";
import { initialFormValues } from "../utils/initialFormValues";
import { parishOptions, artDisciplinesOptions } from "../utils/formOptions";
import useDependentOptions from "./useDependentOptions";
import useRestartConditionalInput from "./useRestartConditionalInput";

export default function useForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

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
    "disability"
  );

  useRestartConditionalInput(formValues.hasIllness, setFormValues, "illness");

  const handleChange = <K extends keyof FormValues>(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const key = name as K;
    setFormValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return {
    formValues,
    availableParishes,
    availableArtDisciplines,
    handleChange,
  };
}
