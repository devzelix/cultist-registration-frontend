import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { FormValues } from "../utils/interfaces";

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
  fieldToReset: keyof FormValues // Improved typing for better safety
) {
  useEffect(() => {
    // Resets the field to an empty string whenever the 'dependsOnValue' changes
    setFormValues((prev) => ({
      ...prev,
      [fieldToReset]: "",
    }));
  }, [dependsOnValue, setFormValues, fieldToReset]); // Effect depends on 'dependsOnValue'
}
