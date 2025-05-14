import { getMaxBirthDate, getMinBirthDate } from "./birthDateRange";

export default function validateBirthDate(birthDate: string): string {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!birthDate) return "¡ Fecha de nacimiento requerida !";

  if (!regex.test(birthDate)) return "¡ Use el formato YYYY-MM-DD !";

  const [year, month, day] = birthDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const [yearMax, monthMax, dayMax] = getMaxBirthDate().split("-").map(Number);
  const dateMax = new Date(yearMax, monthMax - 1, dayMax);
  const [yearMin, monthMin, dayMin] = getMinBirthDate().split("-").map(Number);
  const dateMin = new Date(yearMin, monthMin - 1, dayMin);

  if (date > dateMax) return "¡ Debe tener al menos 18 años !";
  if (date < dateMin) return "¡ No puede ser mayor a 120 años !";
  return "";
}
