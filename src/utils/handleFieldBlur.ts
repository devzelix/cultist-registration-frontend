import type { Dispatch, SetStateAction } from "react";
import type { FormValues } from "./interfaces";
import type { FormErrors } from "./interfaces";
import validateFields from "./validateFields";

/**
 * Handles the blur event for form fields and updates the corresponding error state.
 *
 * @param e - The blur event from an input or select element.
 * @param setFormErrors - Function to update the form's error state.
 */
export default function handleFieldBlur<K extends keyof FormValues>(
  e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>
) {
  const { name, value } = e.target;
  const key = name as K;

  const error = validateFields(key, value); // Validate the field based on key and value.

  const errorKey = `${key}Error` as keyof FormErrors; // Determine the corresponding error field key.

  // Update the form error state.
  setFormErrors((prevState) => ({
    ...prevState,
    [errorKey]: error,
  }));
}
