import type { FormValues } from "./interfaces";
import validateBirthDate from "./validateBirthDate";
import validateDescriptionField from "./validateDescriptionField";
import validateEmail from "./validateEmail";
import validateHomeAddress from "./validateHomeAddress";
import validateIdNumber from "./validateIdNumber";
import validateInstagramUser from "./validateInstagramUser";
import validateName from "./validateName";
import validatePhoneNumber from "./validatePhoneNumber";
import validateSelect from "./validateSelect";
import validateYearsOfExperience from "./validateYearsOfExperience";

/**
 * Validates a form field based on its key and value.
 * Calls the appropriate validation function for each field.
 *
 * @param key - The form field key.
 * @param value - The value to validate.
 * @returns An error message if invalid, or an empty string if valid.
 */
export default function validateFields<K extends keyof FormValues>(
  key: K,
  value: string
): string {
  if (key === "firstName" || key === "lastName")
    return validateName(key, value);
  if (key === "idNumber") return validateIdNumber(value);
  if (key === "birthDate") return validateBirthDate(value);
  if (key === "phoneNumber") return validatePhoneNumber(value);
  if (key === "email") return validateEmail(value);
  if (key === "instagramUser") return validateInstagramUser(value);
  if (
    key === "gender" ||
    key === "municipalityId" ||
    key === "parishId" ||
    key === "artCategoryId" ||
    key === "artDisciplineId"
  )
    return validateSelect(key, value);
  if (key === "homeAddress") return validateHomeAddress(value);
  if (key === "yearsOfExperience") return validateYearsOfExperience(value);
  if (key === "otherDiscipline" || key === "groupName" || key === "disability" || key === "illness")
    return validateDescriptionField(key, value);

  if (!value) return "¡ Campo Obligatorio !";
  return "";
}
