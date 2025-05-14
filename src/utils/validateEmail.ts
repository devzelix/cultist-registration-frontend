export default function validateEmail(email: string): string {
  email = email.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email) return "¡ Correo electrónico requerido !";
  if (!regex.test(email)) return "¡ Correo electrónico inválido !";
  return "";
}
