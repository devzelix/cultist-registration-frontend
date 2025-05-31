/**
 * Calculates the earliest valid birth date, which is 120 years before today.
 *
 * This is used to prevent unrealistically old birth dates.
 *
 * @returns A string in ISO format (YYYY-MM-DD) representing the minimum birth date.
 */
export function getMinimumBirthDate(): string {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 120);
  return formatDateToISO(date);
}

/**
 * Calculates the latest valid birth date, which is 18 years before today.
 *
 * This ensures the person is at least 18 years old.
 *
 * @returns A string in ISO format (YYYY-MM-DD) representing the maximum birth date.
 */
export function getMaximumBirthDate(): string {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return formatDateToISO(date);
}

/**
 * Formats a Date object into a string in ISO format (YYYY-MM-DD).
 *
 * @param date - The Date object to format.
 * @returns A string representing the date in ISO format.
 */
function formatDateToISO(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
