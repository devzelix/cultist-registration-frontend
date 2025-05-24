import type { FormValues } from "./interfaces";

/**
 * Validates descriptive fields like groupName, disability, and illness.
 *
 * - Trims whitespace.
 * - Checks if required fields are filled.
 * - Validates format (2-100 characters, letters, accents, spaces, and some punctuation).
 *
 * @param key - The field name being validated.
 * @param value - The field value to validate.
 * @returns An error message if invalid, or empty string if valid.
 */
export default function validateDescriptionField<K extends keyof FormValues>(
  key: K,
  value: string
): string {
  value = value.trim();
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s.,'-]{2,100}$/;

  if (!value) {
    if (key === "groupName") return ""; // groupName is optional
    if (key === "disability") return "¡ Discapacidad requerida !";
    if (key === "illness") return "¡ Enfermedad requerida !";
  }

  if (!regex.test(value)) {
    if (key === "groupName") return "¡ Nombre de Agrupación inválido !";
    if (key === "disability") return "¡ Discapacidad inválida !";
    if (key === "illness") return "¡ Enfermedad inválida !";
  }

  return "";
}
