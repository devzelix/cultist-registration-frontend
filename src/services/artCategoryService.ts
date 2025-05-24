import type { Option } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetches all art categories from the API.
 * @returns An array of options formatted for select inputs, or null if the request fails.
 */
export async function getAll() {
  try {
    const response = await fetch(`${API_URL}/art-categories`);
    if (!response.ok) return null;

    const data = await response.json();
    let key = 0;

    // Maps API data to a standardized option format
    const artCategoriesOptions: Option[] = data.map(
      (item: { id: number; name: string }) => ({
        key: key++,
        value: item.id.toString(),
        option: item.name,
      })
    );

    return artCategoriesOptions;
  } catch {
    // Returns null on any unexpected error
    return null;
  }
}
