export default function validateEmail(email: string): string {
  email = email.trim();
  const regex = /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,184}.[a-zA-Z]{2,10}$/;
  if (!email) return "¡ Correo electrónico requerido !";
  if (!regex.test(email)) return "¡ Correo electrónico inválido !";
  return "";
}
