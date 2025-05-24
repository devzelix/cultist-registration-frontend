import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import { getAll } from "../services/artDisciplineService";

/**
 * Custom hook to fetch and manage artistic disciplines options,
 * which are organized by their parent art category.
 *
 * @param setIsLoading - Setter function to toggle the loading state.
 * @param setIsStatusError - Setter function to handle error state if the fetch fails.
 * @returns artDisciplinesOptions - A record mapping category IDs to arrays of discipline options.
 */
export default function useArtDisciplinesOptions(
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsStatusError: Dispatch<SetStateAction<boolean>>
) {
  // State to hold the fetched disciplines grouped by category ID
  const [artDisciplinesOptions, setArtDisciplinesOptions] = useState<
    Record<string, Option[]>
  >({});

  useEffect(() => {
    async function load() {
      setIsLoading(true); // Indicate loading starts

      const data = await getAll(); // Fetch data from the service

      if (!data) {
        setArtDisciplinesOptions({}); // Clear options on failure
        setIsStatusError(true); // Trigger error state
      } else {
        setArtDisciplinesOptions(data); // Populate options on success
      }

      setIsLoading(false); // Indicate loading ends
    }

    load();
  }, [setIsLoading, setIsStatusError]); // Dependencies to prevent stale closures

  return artDisciplinesOptions;
}
