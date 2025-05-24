/**
 * Returns the minimum valid birth date, which is 120 years ago from today's date.
 *
 * Used to validate that a person's birth date is not unrealistically far in the past.
 * The returned format is ISO (YYYY-MM-DD).
 *
 * @returns A string representing the earliest acceptable birth date.
 */
export function getMinBirthDate(): string {
  const today = new Date(); // Get today's date.
  const minDate = new Date(today); // Clone today's date.
  minDate.setFullYear(today.getFullYear() - 120); // Subtract 120 years.
  return minDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD.
}

/**
 * Returns the maximum valid birth date, which is 18 years ago from today's date.
 *
 * Used to ensure the person is at least 18 years old.
 * The returned format is ISO (YYYY-MM-DD).
 *
 * @returns A string representing the latest acceptable birth date.
 */
export function getMaxBirthDate(): string {
  const today = new Date(); // Get today's date.
  const maxDate = new Date(today); // Clone today's date.
  maxDate.setFullYear(today.getFullYear() - 18); // Subtract 18 years.
  return maxDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD.
}
