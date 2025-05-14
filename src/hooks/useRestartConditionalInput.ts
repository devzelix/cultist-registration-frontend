import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { FormValues } from "../utils/interfaces";

export default function useRestartConditionalInput(
  dependsOnValue: string,
  setFormValues: Dispatch<SetStateAction<FormValues>>,
  fieldToReset: string
) {
  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      [fieldToReset]: "",
    }));
  }, [dependsOnValue, setFormValues, fieldToReset]);
}
