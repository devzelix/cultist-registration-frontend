import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import { getAll } from "../services/artCategoryService";

/**
 * Custom hook to fetch and manage options for art categories.
 *
 * @param setIsLoading - Function to toggle the loading state during the fetch process.
 * @param setIsStatusError - Function to set error state if the fetch fails.
 * @returns artCategoriesOptions - Array of options representing available art categories.
 */
export default function useArtCategoriesOptions(
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsStatusError: Dispatch<SetStateAction<boolean>>
) {
  // Local state to store the fetched category options
  const [artCategoriesOptions, setArtCategoriesOptions] = useState<Option[]>(
    []
  );

  useEffect(() => {
    // Internal async function to handle data fetching
    async function load() {
      setIsLoading(true); // Begin loading state

      const data = await getAll(); // Fetch category data

      if (!data) {
        // If data fetch fails
        setArtCategoriesOptions([]); // Clear options
        setIsStatusError(true); // Set error flag
      } else {
        // If successful, populate options
        setArtCategoriesOptions(data);
      }

      setIsLoading(false); // End loading state
    }

    load(); // Execute fetch on component mount
  }, [setIsLoading, setIsStatusError]); // Dependencies ensure effect stability

  return artCategoriesOptions;
}
