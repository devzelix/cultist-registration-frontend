export default function determinateFieldConflict(error: string) {
  if (error.includes("Id Number")) return "número de cédula";
  if (error.includes("Phone Number")) return "número de teléfono";
  if (error.includes("Email")) return "correo electrónico";
  return "usuario de Instagram";
}
