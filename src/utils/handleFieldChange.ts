import type { Dispatch, SetStateAction } from "react";
import type { FormValues } from "./interfaces";

export default function handleFieldChange<K extends keyof FormValues>(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setFormValues: Dispatch<SetStateAction<FormValues>>
) {
  const { name, value } = e.target;
  const key = name as K;
  setFormValues((prevState) => ({
    ...prevState,
    [key]: value,
  }));
}
