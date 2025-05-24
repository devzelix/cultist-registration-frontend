import type { Option } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetches all art disciplines from the API and organizes them by their corresponding art category ID.
 * @returns A record mapping each art category ID to its list of discipline options, or null if the request fails.
 */
export async function getAll() {
  try {
    const response = await fetch(`${API_URL}/art-disciplines`);
    if (!response.ok) return null;

    const data = await response.json();
    let key = 0;
    const artDisciplinesOptions: Record<string, Option[]> = {};

    // Iterate through each item and group disciplines by their category ID
    for (const item of data) {
      const option: Option = {
        key: key++,
        value: item.id.toString(),
        option: item.name,
      };

      const artCategoryId = item.artCategoryId.toString();

      // Initialize array if category ID doesn't exist yet
      if (!artDisciplinesOptions[artCategoryId]) {
        artDisciplinesOptions[artCategoryId] = [];
      }

      artDisciplinesOptions[artCategoryId].push(option);
    }

    return artDisciplinesOptions;
  } catch {
    // Return null on fetch or parsing failure
    return null;
  }
}
