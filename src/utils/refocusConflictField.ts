import type { Dispatch, SetStateAction } from "react";

export default function refocusConflictField(
  setIsStatusConflict: Dispatch<SetStateAction<boolean>>,
  messageConflict: string,
  setMessageConflict: Dispatch<SetStateAction<string>>
) {
  setIsStatusConflict(false);
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
  const field = document.querySelector(`[name="${nameField}"]`) as HTMLElement;
  if (field) field.focus();
  setMessageConflict("");
}
