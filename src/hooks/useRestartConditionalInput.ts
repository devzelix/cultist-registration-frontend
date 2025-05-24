import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { FormErrors, FormValues } from "../utils/interfaces";

/**
 * Custom hook to reset a form field and its error when a dependent value changes.
 *
 * @param dependsOnValue - The value that triggers the reset effect.
 * @param setFormValues - State setter for updating form values.
 * @param setFormErrors - State setter for clearing form errors.
 * @param fieldToReset - The specific form field to reset.
 * @param fieldErrorToReset - The corresponding error field to reset.
 */
export default function useRestartConditionalInput(
  dependsOnValue: string,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>,
  fieldToReset: keyof FormValues,
  fieldErrorToReset: keyof FormErrors
) {
  useEffect(() => {
    // Reset the target form field to an empty string
    setFormValues((prev) => ({
      ...prev,
      [fieldToReset]: "",
    }));

    // Clear the related error message for the field
    setFormErrors((prev) => ({
      ...prev,
      [fieldErrorToReset]: "",
    }));
  }, [
    dependsOnValue,
    setFormValues,
    fieldToReset,
    setFormErrors,
    fieldErrorToReset,
  ]); // Trigger effect whenever dependsOnValue changes
}
