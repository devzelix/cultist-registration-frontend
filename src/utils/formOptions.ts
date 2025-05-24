import { type Option } from "./interfaces";

/**
 * Gender options used in the form select input.
 */
export const genderOptions: Option[] = [
  { key: 1, value: "F", option: "Femenino" },
  { key: 2, value: "M", option: "Masculino" },
];

/**
 * Nationality options used for ID prefix selection.
 */
export const nationalityOptions: Option[] = [
  { key: 1, value: "V", option: "V" },
  { key: 2, value: "E", option: "E" },
];

/**
 * Phone prefix options used in the form select input.
 */
export const phonePrefixOptions: Option[] = [
  { key: 1, value: "0412", option: "0412" },
  { key: 2, value: "0414", option: "0414" },
  { key: 3, value: "0416", option: "0416" },
  { key: 4, value: "0424", option: "0424" },
  { key: 5, value: "0426", option: "0426" },
];
