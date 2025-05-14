import { useEffect, useMemo, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import type { FormValues } from "../utils/interfaces";

/**
 * Custom hook to manage options that depend on a value and reset a form field.
 *
 * @param optionsMap - A map of options for each dependent value.
 * @param dependsOnValue - The value that determines which options should be displayed.
 * @param setFormValues - The function to update the form state.
 * @param fieldToReset - The form field to reset when the dependent value changes.
 * @returns availableOptions - The options to be displayed based on the 'dependsOnValue'.
 */
export default function useDependentOptions(
  optionsMap: Record<string, Option[]>,
  dependsOnValue: string,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  fieldToReset: keyof FormValues
) {
  // Memoizes the available options based on 'dependsOnValue'.
  const availableOptions = useMemo(() => {
    return optionsMap[dependsOnValue] ?? [];
  }, [optionsMap, dependsOnValue]);

  // Resets the field to "0" every time the dependent value changes.
  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      [fieldToReset]: "0",
    }));
  }, [dependsOnValue, setFormValues, fieldToReset]);

  return availableOptions;
}
