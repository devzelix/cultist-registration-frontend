import { useState } from "react";
import type { FormValues } from "../utils/interfaces";
import { initialFormValues } from "../utils/initialFormValues";
import { parishOptions, artDisciplinesOptions } from "../utils/formOptions";
import useDependentOptions from "./useDependentOptions";

export default function useForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const availablesParishes = useDependentOptions(
    parishOptions,
    formValues.municipalityId,
    setFormValues,
    "parishId"
  );

  const availablesArtDisciplines = useDependentOptions(
    artDisciplinesOptions,
    formValues.artCategoryId,
    setFormValues,
    "artDisciplineId"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormValues;
    setFormValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return {
    formValues,
    availablesParishes,
    availablesArtDisciplines,
    handleChange,
  };
}
