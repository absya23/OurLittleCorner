export default function handleFormatNumber(number) {
  if (typeof number === "number") {
    return Intl.NumberFormat("de-DE").format(number);
  }
  return 0;
}
