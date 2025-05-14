export default function validateYearsOfExperience(value: string): string {
  const number = Number(value);

  if (!value) return "¡ Años de Trayectoria requeridos !";

  if (isNaN(number) || number < 1 || number > 100)
    return "¡ Debe tener entre 1 y 100 años !";

  return "";
}
