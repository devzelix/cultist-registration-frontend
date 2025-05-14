export default function validateHomeAddress(homeAddress: string): string {
  homeAddress = homeAddress.trim();

  if (!homeAddress) return "¡ Dirección requerida !";

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9.,#\-°() ]{5,100}$/;

  if (!regex.test(homeAddress)) return "¡ Dirección inválida !";

  return "";
}
