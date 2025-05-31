import { getMaximumBirthDate, getMinimumBirthDate } from "./birthDateRange";

/**
 * Validates the birth date string.
 *
 * Checks for presence, correct format (YYYY-MM-DD), and age limits (18 to 120 years).
 *
 * @param birthDate - The birth date string to validate.
 * @returns An error message if invalid, or empty string if valid.
 */
export default function validateBirthDate(birthDate: string): string {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!birthDate) return "¡ Fecha de nacimiento requerida !"; // Required field check

  if (!regex.test(birthDate)) return "¡ Use el formato YYYY-MM-DD !"; // Format validation

  const [year, month, day] = birthDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const [yearMax, monthMax, dayMax] = getMaximumBirthDate()
    .split("-")
    .map(Number);
  const dateMax = new Date(yearMax, monthMax - 1, dayMax);

  const [yearMin, monthMin, dayMin] = getMinimumBirthDate()
    .split("-")
    .map(Number);
  const dateMin = new Date(yearMin, monthMin - 1, dayMin);

  if (date > dateMax) return "¡ Debe tener al menos 18 años !"; // Minimum age check
  if (date < dateMin) return "¡ No puede ser mayor a 120 años !"; // Maximum age check

  return ""; // Valid date
}
