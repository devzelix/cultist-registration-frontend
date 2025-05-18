export default function formatString(text: string) {
  const splicedText: string[] = text.trim().split(" ");
  let formatText = "";
  for (const sliceText of splicedText) {
    formatText +=
      sliceText.substring(0, 1).toUpperCase() +
      sliceText.substring(1).toLowerCase() +
      " ";
  }
  return formatText.substring(0, formatText.length - 1);
}
