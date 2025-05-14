import { type Option } from "./interfaces";

export const nationalityOptions: Option[] = [
  { key: 1, value: "V", option: "V" },
  { key: 2, value: "E", option: "E" },
];

export const phonePrefixOptions: Option[] = [
  { key: 1, value: "0412", option: "0412" },
  { key: 2, value: "0414", option: "0414" },
  { key: 3, value: "0416", option: "0416" },
  { key: 4, value: "0424", option: "0424" },
  { key: 5, value: "0426", option: "0426" },
];

export const municipalityOptions: Option[] = [
  { key: 1, value: "1", option: "Bejuma" },
  { key: 2, value: "2", option: "Carlos Arvelo" },
  { key: 3, value: "3", option: "Diego Ibarra" },
  { key: 4, value: "4", option: "Guacara" },
  { key: 5, value: "5", option: "Juan José Mora" },
  { key: 6, value: "6", option: "Libertador" },
  { key: 7, value: "7", option: "Los Guayos" },
  { key: 8, value: "8", option: "Miranda" },
  { key: 9, value: "9", option: "Montalbán" },
  { key: 10, value: "10", option: "Naguanagua" },
  { key: 11, value: "11", option: "Puerto Cabello" },
  { key: 12, value: "12", option: "San Diego" },
  { key: 13, value: "13", option: "San Joaquín" },
  { key: 14, value: "14", option: "Valencia" },
];

export const parishOptions: Record<string, Option[]> = {
  1: [
    { key: 1, value: "1", option: "Bejuma" },
    { key: 2, value: "2", option: "Canoabo" },
    { key: 3, value: "3", option: "Simón Bolívar" },
  ],
  2: [
    { key: 1, value: "4", option: "Belén" },
    { key: 2, value: "5", option: "Güigüe" },
    { key: 3, value: "6", option: "Tacarigua" },
  ],
  3: [
    { key: 1, value: "7", option: "Aguas Calientes" },
    { key: 2, value: "8", option: "Mariara" },
  ],
  4: [
    { key: 1, value: "9", option: "Ciudad Alianza" },
    { key: 2, value: "10", option: "Guacara" },
    { key: 3, value: "11", option: "Yagua" },
  ],
  5: [
    { key: 1, value: "12", option: "Morón" },
    { key: 2, value: "13", option: "Urama" },
  ],
  6: [
    { key: 1, value: "14", option: "Independencia" },
    { key: 2, value: "15", option: "Tocuyito" },
  ],
  7: [{ key: 1, value: "16", option: "Los Guayos" }],
  8: [{ key: 1, value: "17", option: "Miranda" }],
  9: [{ key: 1, value: "18", option: "Montalbán" }],
  10: [{ key: 1, value: "19", option: "Naguanagua" }],
  11: [
    { key: 1, value: "20", option: "Bartolomé Salom" },
    { key: 2, value: "21", option: "Borburata" },
    { key: 3, value: "22", option: "Democracia" },
    { key: 4, value: "23", option: "Fraternidad" },
    { key: 5, value: "24", option: "Goaigoaza" },
    { key: 6, value: "25", option: "Juan José Flores" },
    { key: 7, value: "26", option: "Patanemo" },
    { key: 8, value: "27", option: "Unión" },
  ],
  12: [{ key: 1, value: "28", option: "San Diego" }],
  13: [{ key: 1, value: "29", option: "San Joaquín" }],
  14: [
    { key: 1, value: "30", option: "Candelaria" },
    { key: 2, value: "31", option: "Catedral" },
    { key: 3, value: "32", option: "El Socorro" },
    { key: 4, value: "33", option: "Miguel Peña" },
    { key: 5, value: "34", option: "Negro Primero" },
    { key: 6, value: "35", option: "Rafael Urdaneta" },
    { key: 7, value: "36", option: "San Blas" },
    { key: 8, value: "37", option: "San José" },
    { key: 9, value: "38", option: "Santa Rosa" },
  ],
};

export const artCategoriesOptions: Option[] = [
  { key: 1, value: "1", option: "Artesanía" },
  { key: 2, value: "2", option: "Artes Plásticas" },
  { key: 3, value: "3", option: "Audiovisuales" },
  { key: 4, value: "4", option: "Danza" },
  { key: 5, value: "5", option: "Literatura" },
  { key: 6, value: "6", option: "Música" },
  { key: 7, value: "7", option: "Teatro" },
];

export const artDisciplinesOptions: Record<string, Option[]> = {
  1: [
    { key: 1, value: "1", option: "Cestería" },
    { key: 2, value: "2", option: "Dulcería criolla" },
    { key: 3, value: "3", option: "Luthería" },
    { key: 4, value: "4", option: "Muñequería" },
    { key: 5, value: "5", option: "Prendas" },
    { key: 6, value: "6", option: "Tejido" },
  ],
  2: [
    { key: 1, value: "1", option: "Cerámica" },
    { key: 2, value: "2", option: "Escultura" },
    { key: 3, value: "3", option: "Instalación" },
    { key: 4, value: "4", option: "Orfebrería" },
    { key: 5, value: "5", option: "Pintura" },
  ],
  3: [
    { key: 1, value: "1", option: "Cine" },
    { key: 2, value: "2", option: "Experimental" },
    { key: 3, value: "3", option: "Fotografía" },
    { key: 4, value: "4", option: "Videoarte" },
  ],
  4: [
    { key: 1, value: "1", option: "Ballet" },
    { key: 2, value: "2", option: "Contemporánea" },
    { key: 3, value: "3", option: "Moderna" },
    { key: 4, value: "4", option: "Urbana" },
    { key: 5, value: "5", option: "Tadricional" },
  ],
  5: [
    { key: 1, value: "1", option: "Crónica" },
    { key: 2, value: "2", option: "Cuento" },
    { key: 3, value: "3", option: "Ensayo" },
    { key: 4, value: "4", option: "Novela" },
    { key: 5, value: "5", option: "Poesía" },
  ],
  6: [
    { key: 1, value: "1", option: "Clásica o académica" },
    { key: 2, value: "2", option: "Experimental" },
    { key: 3, value: "3", option: "Fusión" },
    { key: 4, value: "4", option: "Llanera" },
    { key: 5, value: "5", option: "Popular" },
    { key: 6, value: "6", option: "Rock" },
    { key: 7, value: "7", option: "Tradicional" },
    { key: 8, value: "8", option: "Urbana" },
  ],
  7: [
    { key: 1, value: "1", option: "Circo" },
    { key: 2, value: "2", option: "Clown" },
    { key: 3, value: "3", option: "Mimo" },
    { key: 4, value: "4", option: "Teatro" },
    { key: 5, value: "5", option: "Títeres" },
  ],
};
