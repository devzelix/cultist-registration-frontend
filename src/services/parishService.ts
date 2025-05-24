import type { Option } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetches all parishes from the API and organizes them by municipality ID.
 *
 * @returns A record of parish options grouped by municipality ID, or null if the request fails.
 */
export async function getAll() {
  try {
    const response = await fetch(`${API_URL}/parishes`);
    if (!response.ok) return null;

    const data = await response.json();
    let key = 0;

    const parishesOptions: Record<string, Option[]> = {};

    for (const item of data) {
      const option: Option = {
        key: key++,
        value: item.id.toString(),
        option: item.name,
      };

      const municipalityId = item.municipalityId.toString();

      if (!parishesOptions[municipalityId]) {
        parishesOptions[municipalityId] = [];
      }

      parishesOptions[municipalityId].push(option);
    }

    return parishesOptions;
  } catch {
    // Return null if fetch fails
    return null;
  }
}
