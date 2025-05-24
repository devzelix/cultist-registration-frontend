/**
 * Validates the years of experience field.
 *
 * Checks that the value is present, is a number, and falls within the valid range (1-100).
 *
 * @param value - The input value as a string.
 * @returns An error message if invalid, otherwise an empty string.
 */
export default function validateYearsOfExperience(value: string): string {
  const number = Number(value);

  if (!value) return "¡ Años de Trayectoria requeridos !";

  if (isNaN(number) || number < 1 || number > 100)
    return "¡ Debe tener entre 1 y 100 años !";

  return "";
}
