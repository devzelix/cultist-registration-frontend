import type { Dispatch, SetStateAction } from "react";
import type { FormErrors, FormValues } from "./interfaces";

/**
 * Handles changes in form fields, updates form values,
 * and clears corresponding error messages if they exist.
 *
 * @param e - The change event from an input or select element.
 * @param formErrors - Current form errors state.
 * @param setFormValues - Function to update form values state.
 * @param setFormErrors - Function to update form errors state.
 */
export default function handleFieldChange<K extends keyof FormValues>(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  formErrors: FormErrors,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>
) {
  const { name, value } = e.target;
  const key = name as K;

  // Update the form value for the changed field.
  setFormValues((prevState) => ({
    ...prevState,
    [key]: value,
  }));

  const keyError = `${key}Error` as keyof FormErrors;

  // Clear the error message if one exists for this field.
  if (formErrors[keyError] !== "") {
    setFormErrors((prev) => ({
      ...prev,
      [keyError]: "",
    }));
  }
}
