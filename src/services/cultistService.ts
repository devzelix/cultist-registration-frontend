import type {
  ConflictBody,
  RequestBody,
  SuccessBody,
} from "../utils/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

export async function create(
  cultist: RequestBody
): Promise<ConflictBody | SuccessBody | null> {
  try {
    const response = await fetch(`${API_URL}/cultists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cultist),
    });
    if (response.ok) {
      const result: SuccessBody = await response.json();
      return result;
    }
    if (response.status === 409) {
      const result: ConflictBody = await response.json();
      return result;
    }
    return null;
  } catch (_error) {
    return null;
  }
}
