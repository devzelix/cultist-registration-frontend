import type { FormValues } from "./interfaces";

/**
 * Validates first name or last name fields.
 * - Trims whitespace.
 * - Checks for empty value and returns specific messages.
 * - Limits length to 50 characters.
 * - Allows only letters, accents, apostrophes, hyphens, and spaces.
 *
 * @param key - The field name ("firstName" or "lastName").
 * @param name - The name value to validate.
 * @returns Error message if invalid, or empty string if valid.
 */
export default function validateName<K extends keyof FormValues>(
  key: K,
  name: string
): string {
  name = name.trim();

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'\- ]{1,50}$/;

  if (!name) {
    if (key === "firstName") return "¡ Nombre requerido !";
    if (key === "lastName") return "¡ Apellido requerido !";
  }

  if (name.length > 50) return "¡ Máximo 50 caracteres !";

  if (!regex.test(name)) return "¡ Solo se permiten letras y tildes !";

  return "";
}
