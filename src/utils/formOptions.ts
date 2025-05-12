import { type Option } from "./interfaces";

export const nationalityOptions: Option[] = [
  { key: 1, value: "v", option: "V" },
  { key: 2, value: "e", option: "E" },
];

export const phonePrefixOptions: Option[] = [
  { key: 1, value: "0412", option: "0412" },
  { key: 2, value: "0414", option: "0414" },
  { key: 3, value: "0416", option: "0416" },
  { key: 4, value: "0424", option: "0424" },
  { key: 5, value: "0426", option: "0426" },
];

export const municipalityOptions: Option[] = [
  { key: 1, value: "bejuma", option: "Bejuma" },
  { key: 2, value: "carlos arvelo", option: "Carlos Arvelo" },
  { key: 3, value: "diego ibarra", option: "Diego Ibarra" },
  { key: 4, value: "guacara", option: "Guacara" },
  { key: 5, value: "juan josé mora", option: "Juan José Mora" },
  { key: 6, value: "libertador", option: "Libertador" },
  { key: 7, value: "los guayos", option: "Los Guayos" },
  { key: 8, value: "miranda", option: "Miranda" },
  { key: 9, value: "montalbán", option: "Montalbán" },
  { key: 10, value: "naguanagua", option: "Naguanagua" },
  { key: 11, value: "puerto cabello", option: "Puerto Cabello" },
  { key: 12, value: "san diego", option: "San Diego" },
  { key: 13, value: "san joaquín", option: "San Joaquín" },
  { key: 14, value: "valencia", option: "Valencia" },
];

export const parishOptions: Record<string, Option[]> = {
  bejuma: [
    { key: 1, value: "bejuma", option: "Bejuma" },
    { key: 2, value: "canoabo", option: "Canoabo" },
    { key: 3, value: "simón bolívar", option: "Simón Bolívar" },
  ],
  "carlos arvelo": [
    { key: 1, value: "belén", option: "Belén" },
    { key: 2, value: "güigüe", option: "Güigüe" },
    { key: 3, value: "tacarigua", option: "Tacarigua" },
  ],
  "diego ibarra": [
    { key: 1, value: "aguas calientes", option: "Aguas Calientes" },
    { key: 2, value: "mariara", option: "Mariara" },
  ],
  guacara: [
    { key: 1, value: "ciudad alianza", option: "Ciudad Alianza" },
    { key: 2, value: "guacara", option: "Guacara" },
    { key: 3, value: "yagua", option: "Yagua" },
  ],
  "juan josé mora": [
    { key: 1, value: "morón", option: "Morón" },
    { key: 2, value: "urama", option: "Urama" },
  ],
  libertador: [
    { key: 1, value: "independencia", option: "Independencia" },
    { key: 2, value: "tocuyito", option: "Tocuyito" },
  ],
  "los guayos": [{ key: 1, value: "los guayos", option: "Los Guayos" }],
  miranda: [{ key: 1, value: "miranda", option: "Miranda" }],
  montalbán: [{ key: 1, value: "montalbán", option: "Montalbán" }],
  naguanagua: [{ key: 1, value: "naguanagua", option: "Naguanagua" }],
  "puerto cabello": [
    { key: 1, value: "bartolomé salom", option: "Bartolomé Salom" },
    { key: 2, value: "borburata", option: "Borburata" },
    { key: 3, value: "democracia", option: "Democracia" },
    { key: 4, value: "fraternidad", option: "Fraternidad" },
    { key: 5, value: "goaigoaza", option: "Goaigoaza" },
    { key: 6, value: "juan josé flores", option: "Juan José Flores" },
    { key: 7, value: "Patanemo", option: "Patanemo" },
    { key: 8, value: "unión", option: "Unión" },
  ],
  "san diego": [{ key: 1, value: "san diego", option: "San Diego" }],
  "san joaquín": [{ key: 1, value: "san joaquín", option: "San Joaquín" }],
  valencia: [
    { key: 1, value: "candelaria", option: "Candelaria" },
    { key: 2, value: "catedral", option: "Catedral" },
    { key: 3, value: "el socorro", option: "El Socorro" },
    { key: 4, value: "miguel peña", option: "Miguel Peña" },
    { key: 5, value: "negro primero", option: "Negro Primero" },
    { key: 6, value: "rafael urdaneta", option: "Rafael Urdaneta" },
    { key: 7, value: "san blas", option: "San Blas" },
    { key: 8, value: "san josé", option: "San José" },
    { key: 9, value: "santa rosa", option: "Santa Rosa" },
  ],
};

export const artDisciplinesOptions: Option[] = [
  { key: 1, value: "musico", option: "Musico" },
  { key: 2, value: "pintor", option: "Pintor" },
  { key: 3, value: "escritor", option: "Escritor" },
];
