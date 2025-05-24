/**
 * Validates the Instagram username.
 * - Trims whitespace.
 * - Allows empty value (optional field).
 * - Ensures username follows Instagram rules:
 *   - No consecutive dots or underscores.
 *   - Starts and ends with alphanumeric character.
 *   - Length between 1 and 30 characters.
 *
 * @param instagramUser - The Instagram username to validate.
 * @returns An error message if invalid, or empty string if valid or empty.
 */
export default function validateInstagramUser(instagramUser: string): string {
  instagramUser = instagramUser.trim();

  if (!instagramUser) return "";

  const regex = /^(?!.*[._]{2})[a-zA-Z0-9](?:[a-zA-Z0-9._]{0,28}[a-zA-Z0-9])?$/;

  if (!regex.test(instagramUser)) return "¡ Usuario de instagram inválido  !";

  return "";
}
