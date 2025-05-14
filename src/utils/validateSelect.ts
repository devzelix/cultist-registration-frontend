import type { FormValues } from "./interfaces";

export default function validateSelect<K extends keyof FormValues>(
  key: K,
  option: string
): string {
  if (option === "0") {
    if (key === "municipalityId") return "¡ Municipio requerido !";
    if (key === "parishId") return "¡ Parroquia requerida !";
    if (key === "artCategoryId") return "¡ Categoría artística requerida !";
    if (key === "artDisciplineId") return "¡ Disciplina artística requerida !";
  }
  return "";
}
