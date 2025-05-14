import type { Dispatch, SetStateAction, FocusEvent } from "react";
import type { FormErrors } from "./interfaces";

export default function handleFieldFocus<K extends keyof FormErrors>(
  e: FocusEvent<HTMLInputElement | HTMLSelectElement>,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>
) {
  const { name } = e.target;

  const keyError = `${name}Error` as K;

  setFormErrors((prevErrors) => ({
    ...prevErrors,
    [keyError]: "",
  }));
}
