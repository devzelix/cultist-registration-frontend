import type { Dispatch, SetStateAction } from "react";

/**
 * Refocuses the form field related to a conflict error and resets conflict states.
 *
 * @param setIsStatusConflict - Setter to update conflict status flag.
 * @param messageConflict - Conflict message indicating the field with the issue.
 * @param setMessageConflict - Setter to clear the conflict message.
 */
export default function refocusConflictField(
  setIsStatusConflict: Dispatch<SetStateAction<boolean>>,
  messageConflict: string,
  setMessageConflict: Dispatch<SetStateAction<string>>
) {
  setIsStatusConflict(false); // Reset conflict status

  // Determine which field to focus based on conflict message
  let nameField = "";
  switch (messageConflict) {
    case "número de cédula":
      nameField = "idNumber";
      break;
    case "número de teléfono":
      nameField = "phoneNumber";
      break;
    case "correo electrónico":
      nameField = "email";
      break;
    default:
      nameField = "instagramUser";
      break;
  }

  // Focus the input field if it exists in the DOM
  const field = document.querySelector(`[name="${nameField}"]`) as HTMLElement;
  if (field) field.focus();

  setMessageConflict(""); // Clear conflict message
}
