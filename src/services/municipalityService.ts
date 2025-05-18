import type { Option } from "../utils/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export async function getAll() {
  try {
    const response = await fetch(`${API_URL}/municipalities`);
    if (!response.ok) return null;
    const data = await response.json();
    let key = 0;
    const municipalitiesOptions: Option[] = data.map(
      (item: { id: number; name: string }) => {
        return { key: key++, value: item.id.toString(), option: item.name };
      }
    );
    return municipalitiesOptions;
  } catch (_error) {
    return null;
  }
}
