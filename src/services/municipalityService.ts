import type { Option } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetches all municipalities from the API and formats them into an array of Option objects.
 *
 * @returns An array of municipalities as Option objects, or null if the request fails.
 */
export async function getAll() {
  try {
    const response = await fetch(`${API_URL}/municipalities`);
    if (!response.ok) return null;

    const data = await response.json();
    let key = 0;

    const municipalitiesOptions: Option[] = data.map(
      (item: { id: number; name: string }) => ({
        key: key++,
        value: item.id.toString(),
        option: item.name,
      })
    );

    return municipalitiesOptions;
  } catch {
    // Return null on request failure
    return null;
  }
}
