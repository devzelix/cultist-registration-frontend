import type { FormValues } from "./interfaces";

/**
 * Validates select inputs by checking if the selected option is not the default ("0").
 *
 * @param key - The form field key being validated.
 * @param option - The selected option value.
 * @returns Error message if the selection is invalid, otherwise an empty string.
 */
export default function validateSelect<K extends keyof FormValues>(
  key: K,
  option: string
): string {
  if (option === "0") {
    if (key === "gender") return "¡ Género requerido !";
    if (key === "municipalityId") return "¡ Municipio requerido !";
    if (key === "parishId") return "¡ Parroquia requerida !";
    if (key === "artCategoryId") return "¡ Categoría artística requerida !";
    if (key === "artDisciplineId") return "¡ Disciplina artística requerida !";
  }
  return "";
}
