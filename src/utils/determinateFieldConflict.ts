/**
 * Determines which form field is in conflict based on an error message.
 *
 * This function is used to map backend error messages to human-readable field names
 * that can be shown to users.
 *
 * @param error - The error message returned from the backend.
 * @returns The corresponding field name in Spanish.
 */
export default function determinateFieldConflict(error: string): string {
  if (error.includes("Id Number")) return "número de cédula";
  if (error.includes("Phone Number")) return "número de teléfono";
  if (error.includes("Email")) return "correo electrónico";
  return "usuario de Instagram"; // Default fallback
}
