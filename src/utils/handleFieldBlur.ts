import type { Dispatch, SetStateAction } from "react";
import type { FormValues } from "./interfaces";
import type { FormErrors } from "./interfaces";
import validateFields from "./validateFields";

export default function handleFieldBlur<K extends keyof FormValues>(
  e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>
) {
  const { name, value } = e.target;
  const key = name as K;

  const error = validateFields(key, value);

  const errorKey = `${key}Error` as keyof FormErrors;

  setFormErrors((prevState) => ({
    ...prevState,
    [errorKey]: error,
  }));
}
