import type { FormValues } from "./interfaces";

export default function validateDescriptionField<K extends keyof FormValues>(
  key: K,
  value: string
): string {
  value = value.trim();
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s.,'-]{2,100}$/;

  if (!value) {
    if (key === "groupName") return "";
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
