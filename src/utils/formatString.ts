/**
 * Formats a string so that each word starts with an uppercase letter followed by lowercase letters.
 *
 * This ensures consistent casing for user inputs like names or addresses.
 *
 * @param text - The raw input string to format.
 * @returns A properly capitalized string.
 */
export default function formatString(text: string): string {
  const words = text.trim().split(" ");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return formattedWords.join(" ");
}
