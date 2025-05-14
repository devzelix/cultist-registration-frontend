export default function validateInstagramUser(instagramUser: string): string {
  instagramUser = instagramUser.trim();

  if (!instagramUser) return "";

  const regex = /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9._]{1,30}$/;

  if (!regex.test(instagramUser)) return "¡ Usuario de instagram inválido  !";

  return "";
}
