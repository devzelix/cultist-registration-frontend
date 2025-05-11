export function getMinBirthDate() {
  const today = new Date();
  const minDate = new Date(today);
  minDate.setFullYear(today.getFullYear() - 120);
  return minDate.toISOString().split("T")[0];
}

export function getMaxBirthDate() {
  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setFullYear(today.getFullYear() - 18);
  return maxDate.toISOString().split("T")[0];
}
