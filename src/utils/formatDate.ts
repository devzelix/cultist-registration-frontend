/**
 * Formats a date string to ensure each component has two digits.
 *
 * Pads the month and day with a leading zero if necessary to maintain the format YYYY-MM-DD.
 *
 * @param date - A date string in the format 'YYYY-M-D', 'YYYY-MM-D', etc.
 * @returns A standardized date string in the format 'YYYY-MM-DD'.
 */
export default function formatDate(date: string): string {
  const [year, month, day] = date.split("-");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}
