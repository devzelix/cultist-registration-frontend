import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { FormErrors, FormValues } from "../utils/interfaces";

/**
 * Custom hook to reset a form field when the value of a dependent field changes.
 *
 * @param dependsOnValue - The value that triggers the field reset.
 * @param setFormValues - The function to update the form state.
 * @param fieldToReset - The form field to reset when the dependent value changes.
 */
export default function useRestartConditionalInput(
  dependsOnValue: string,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>,
  fieldToReset: keyof FormValues, // Improved typing for better safety
  fieldErrorToReset: keyof FormErrors
) {
  useEffect(() => {
    // Resets the field to an empty string whenever the 'dependsOnValue' changes
    setFormValues((prev) => ({
      ...prev,
      [fieldToReset]: "",
    }));
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
  ]); // Effect depends on 'dependsOnValue'
}
