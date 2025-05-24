/**
 * Validates the home address field.
 * - Trims whitespace.
 * - Checks if the field is not empty.
 * - Validates against allowed characters and length (5-100).
 *
 * @param homeAddress - The address string to validate.
 * @returns An error message if invalid, or an empty string if valid.
 */
export default function validateHomeAddress(homeAddress: string): string {
  homeAddress = homeAddress.trim();

  if (!homeAddress) return "¡ Dirección requerida !";

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9.,#\-°() ]{5,100}$/;

  if (!regex.test(homeAddress)) return "¡ Dirección inválida !";

  return "";
}
