/**
 * Validates a phone number.
 * - Trims whitespace.
 * - Requires exactly 7 digits.
 * - Disallows all digits being the same.
 *
 * @param phoneNumber - The phone number string to validate.
 * @returns Error message if invalid, or empty string if valid.
 */
export default function validatePhoneNumber(phoneNumber: string): string {
  phoneNumber = phoneNumber.trim();

  const regex = /^\d{7}$/;

  if (!phoneNumber) return "¡ Número telefónico requerido !";

  if (!regex.test(phoneNumber)) return "¡ Debe tener justo 7 dígitos !";

  if (/^(\d)\1{6}$/.test(phoneNumber))
    return "¡ 7 dígitos iguales no son válidos !";

  return "";
}
