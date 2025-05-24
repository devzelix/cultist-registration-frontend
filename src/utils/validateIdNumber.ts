/**
 * Validates the ID number field.
 * - Trims whitespace.
 * - Checks if the field is not empty.
 * - Validates that it contains 1 to 8 digits only.
 *
 * @param idNumber - The ID number string to validate.
 * @returns An error message if invalid, or an empty string if valid.
 */
export default function validateIdNumber(idNumber: string): string {
  idNumber = idNumber.trim();

  const regex = /^\d{1,8}$/;

  if (!idNumber) return "¡ Cédula de identidad requerida !";

  if (!regex.test(idNumber)) return "¡ Cédula de identidad inválida !";

  return "";
}
