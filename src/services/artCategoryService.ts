import type { Option } from "../utils/interfaces";

const API_URL = "http://192.168.0.190:8080";

export async function getAll() {
  try {
    const response = await fetch(`${API_URL}/art-categories`);
    if (!response.ok) return null;
    const data = await response.json();
    let key = 0;
    const artCategoriesOptions: Option[] = data.map(
      (item: { id: number; name: string }) => {
        return { key: key++, value: item.id.toString(), option: item.name };
      }
    );
    return artCategoriesOptions;
  } catch (_error) {
    return null;
  }
}
