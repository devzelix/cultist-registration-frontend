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
  const field: HTMLInputElement | HTMLSelectElement = e.target;
  const { name, value } = field;
  const key = name as K;

  if (field instanceof HTMLSelectElement && name === "municipalityId") {
    const parishIdError = "parishIdError" as keyof FormErrors;
    if (formErrors[parishIdError] !== "") {
      setFormErrors((prev) => ({
        ...prev,
        [parishIdError]: "",
      }));
    }
  }

  if (field instanceof HTMLSelectElement && (name === "artCategoryId" || name === "artDisciplineId")) {
    const isOtherDiscipline = "isOtherDiscipline" as K;
    const otherDiscipline = "otherDiscipline" as K;
    let is = false;
    if (name === "artDisciplineId" && field.options[field.selectedIndex].text === "Otra..."){
      is = true;
    }
    setFormValues((prevState) => ({
        ...prevState,
        [isOtherDiscipline]: is,
        [otherDiscipline]: "",
    }));

    const artDisciplineIdError = "artDisciplineIdError" as keyof FormErrors;
    const otherDisciplineError = "otherDisciplineError" as keyof FormErrors;
    if (formErrors[artDisciplineIdError] !== "") {
      setFormErrors((prev) => ({
        ...prev,
        [artDisciplineIdError]: "",
      }));
    }
    if (formErrors[otherDisciplineError] !== "") {
      setFormErrors((prev) => ({
        ...prev,
        [otherDisciplineError]: "",
      }));
    }
  }

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
