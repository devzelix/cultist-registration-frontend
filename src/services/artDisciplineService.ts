import type { Option } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export async function getAll() {
  try {
    const response = await fetch(`${API_URL}/art-disciplines`);
    if (!response.ok) return null;
    const data = await response.json();
    let key = 0;
    const artDisciplinesOptions: Record<string, Option[]> = {};
    for (const item of data) {
      const option: Option = {
        key: key++,
        value: item.id.toString(),
        option: item.name,
      };
      const artCategoryId = item.artCategoryId.toString();
      if (!artDisciplinesOptions[artCategoryId]) {
        artDisciplinesOptions[artCategoryId] = [];
      }
      artDisciplinesOptions[artCategoryId].push(option);
    }
    return artDisciplinesOptions;
  } catch (_error) {
    return null;
  }
}
