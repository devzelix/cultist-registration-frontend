export default function validateIdNumber(idNumber: string): string {
  idNumber = idNumber.trim();

  const regex = /^[1-9]\d{0,7}$/;

  if (!idNumber) return "¡ Cédula de identidad requerida !";

  if (!regex.test(idNumber)) return "¡ Cédula de identidad inválida !";

  return "";
}
