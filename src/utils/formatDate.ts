export default function formatDate(date: string) {
  const [year, month, day] = date.split("-");
  console.log(day.padStart(2, "0"));
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}
