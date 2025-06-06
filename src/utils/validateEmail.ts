/**
 * Validates an email address format.
 *
 * - Trims whitespace.
 * - Checks if the email is provided.
 * - Validates email against a regex pattern.
 *
 * @param email - The email string to validate.
 * @returns An error message if invalid.
 */
export default function validateEmail(email: string): string {
  email = email.trim();
  const regex = /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,184}\.[a-zA-Z]{2,10}$/;
  if (!email) return "";
  if (!regex.test(email)) return "¡ Correo electrónico inválido !";
  return "";
}
