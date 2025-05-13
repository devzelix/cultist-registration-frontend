import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import type { FormValues } from "../utils/interfaces";

export default function useDependentOptions(
  optionsMap: Record<string, Option[]>,
  dependsOnValue: string,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  fieldToReset: string
) {
  const [availablesOptions, setAvailablesOptions] = useState<Option[]>([]);

  useEffect(() => {
    setAvailablesOptions(optionsMap[dependsOnValue] ?? []);
    setFormValues((prev) => ({
      ...prev,
      [fieldToReset]: "0",
    }));
  }, [optionsMap, dependsOnValue, setFormValues, fieldToReset]);

  return availablesOptions;
}
