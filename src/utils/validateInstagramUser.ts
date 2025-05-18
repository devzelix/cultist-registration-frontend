export default function validateInstagramUser(instagramUser: string): string {
  instagramUser = instagramUser.trim();

  if (!instagramUser) return "";

  const regex = /^(?!.*[._]{2})[a-zA-Z0-9](?:[a-zA-Z0-9._]{0,28}[a-zA-Z0-9])?$/;

  if (!regex.test(instagramUser)) return "¡ Usuario de instagram inválido  !";

  return "";
}
