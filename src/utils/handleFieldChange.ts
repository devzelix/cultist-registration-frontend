import type { Dispatch, SetStateAction } from "react";
import type { FormErrors, FormValues } from "./interfaces";

export default function handleFieldChange<K extends keyof FormValues>(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  formErrors: FormErrors,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>
) {
  const { name, value } = e.target;
  const key = name as K;
  setFormValues((prevState) => ({
    ...prevState,
    [key]: value,
  }));
  const keyError = `${key}Error` as keyof FormErrors;
  if (formErrors[keyError] !== "") {
    setFormErrors((prev) => ({
      ...prev,
      [keyError]: "",
    }));
  }
}
