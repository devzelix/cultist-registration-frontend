import type {
  ConflictBody,
  RequestBody,
  SuccessBody,
} from "../utils/interfaces";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Sends a POST request to create a new cultor.
 * Handles success, conflict, and error responses appropriately.
 *
 * @param cultor - The data to be sent in the request body.
 * @returns A SuccessBody on success, a ConflictBody on conflict, or null on failure.
 */
export async function create(
  cultor: RequestBody
): Promise<ConflictBody | SuccessBody | null> {
  try {
    const response = await fetch(`${API_URL}/cultors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cultor),
    });

    if (response.ok) {
      const result: SuccessBody = await response.json();
      return result;
    }

    if (response.status === 409) {
      const result: ConflictBody = await response.json();
      return result;
    }

    // Return null if the response is not ok and not a conflict
    return null;
  } catch {
    // Return null if the request fails (e.g., network error)
    return null;
  }
}
