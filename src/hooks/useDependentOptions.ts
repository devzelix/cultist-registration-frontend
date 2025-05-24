import { useEffect, useMemo, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import type { FormValues } from "../utils/interfaces";

/**
 * Custom hook to manage dependent options and reset a related form field.
 *
 * @param optionsMap - A record mapping keys to arrays of options.
 * @param dependsOnValue - The current value that determines which options to display.
 * @param setFormValues - Setter function to update the form values state.
 * @param fieldToReset - The specific form field to reset when 'dependsOnValue' changes.
 * @returns The list of available options corresponding to 'dependsOnValue'.
 */
export default function useDependentOptions(
  optionsMap: Record<string, Option[]>,
  dependsOnValue: string,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  fieldToReset: keyof FormValues
) {
  // Compute and memoize available options based on the current dependent value.
  const availableOptions = useMemo(() => {
    return optionsMap[dependsOnValue] ?? [];
  }, [optionsMap, dependsOnValue]);

  // Reset the targeted form field to "0" whenever the dependent value updates.
  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      [fieldToReset]: "0",
    }));
  }, [dependsOnValue, setFormValues, fieldToReset]);

  return availableOptions;
}
