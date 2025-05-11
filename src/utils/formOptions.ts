import { type Option } from "./interfaces";

export const nationalityOptions: Option[] = [
  { key: 1, value: "v", option: "V" },
  { key: 2, value: "e", option: "E" },
];

export const phonePrefixOptions: Option[] = [
  { key: 1, value: "0412", option: "0412" },
  { key: 2, value: "0414", option: "0414" },
  { key: 3, value: "0416", option: "0416" },
  { key: 3, value: "0424", option: "0424" },
  { key: 3, value: "0426", option: "0426" },
];

export const municipalityOptions: Option[] = [
  { key: 1, value: "valencia", option: "Valencia" },
  { key: 2, value: "san diego", option: "San Diego" },
  { key: 3, value: "libertador", option: "Libertador" },
];

export const parishOptions: Record<string, Option[]> = {
  valencia: [
    { key: 1, value: "miguel pena", option: "Miguel Pena" },
    { key: 2, value: "ricardo urriera", option: "Ricardo Urriera" },
    { key: 3, value: "san blas", option: "San Blas" },
  ],
};

export const optionsDiscipline: Option[] = [
  { key: 1, value: "musico", option: "Musico" },
  { key: 2, value: "pintor", option: "Pintor" },
  { key: 3, value: "escritor", option: "Escritor" },
];
