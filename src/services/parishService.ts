import type { Option } from "../utils/interfaces";

const API_URL = "http://192.168.0.190:8080";

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
      if (!parishesOptions[municipalityId])
        parishesOptions[municipalityId] = [];
      parishesOptions[municipalityId].push(option);
    }
    return parishesOptions;
  } catch (_error) {
    return null;
  }
}
