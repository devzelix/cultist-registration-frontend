export default function validateIdNumber(idNumber: string): string {
  idNumber = idNumber.trim();

  const regex = /^\d{1,8}$/;

  if (!idNumber) return "¡ Cédula de identidad requerida !";

  if (!regex.test(idNumber)) return "¡ Cédula de identidad inválida !";

  return "";
}
