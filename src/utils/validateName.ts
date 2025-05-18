import type { FormValues } from "./interfaces";

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
