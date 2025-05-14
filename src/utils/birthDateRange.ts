/**
 * Returns the minimum valid birth date, which is 120 years ago from today's date.
 *
 * This is used to ensure that the entered birth date is not too far in the past.
 * The date is returned in ISO format (YYYY-MM-DD).
 *
 * @returns A string representing the minimum valid birth date in ISO format.
 */
export function getMinBirthDate() {
  const today = new Date(); // Get the current date.
  const minDate = new Date(today); // Create a copy of today's date.
  minDate.setFullYear(today.getFullYear() - 120); // Set the year to 120 years ago.
  return minDate.toISOString().split("T")[0]; // Return the date in ISO format (YYYY-MM-DD).
}

/**
 * Returns the maximum valid birth date, which is 18 years ago from today's date.
 *
 * This is used to ensure that the entered birth date is not for someone younger than 18.
 * The date is returned in ISO format (YYYY-MM-DD).
 *
 * @returns A string representing the maximum valid birth date in ISO format.
 */
export function getMaxBirthDate() {
  const today = new Date(); // Get the current date.
  const maxDate = new Date(today); // Create a copy of today's date.
  maxDate.setFullYear(today.getFullYear() - 18); // Set the year to 18 years ago.
  return maxDate.toISOString().split("T")[0]; // Return the date in ISO format (YYYY-MM-DD).
}
