import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import { getAll } from "../services/municipalityService";

/**
 * Custom hook to fetch and manage municipality options.
 *
 * @param setIsLoading - Function to set loading state during data fetch
 * @param setIsStatusError - Function to set error state if fetch fails
 * @returns An array of municipality options for use in forms or selects
 */
export default function useMunicipalitiesOptions(
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsStatusError: Dispatch<SetStateAction<boolean>>
) {
  // State to hold fetched municipality options
  const [municipalitiesOptions, setMunicipalitiesOptions] = useState<Option[]>(
    []
  );

  useEffect(() => {
    async function load() {
      setIsLoading(true); // Start loading state

      const data = await getAll(); // Fetch municipalities data

      if (!data) {
        // Handle failed fetch by clearing options and setting error state
        setMunicipalitiesOptions([]);
        setIsStatusError(true);
      } else {
        // Populate state with fetched options
        setMunicipalitiesOptions(data);
      }

      setIsLoading(false); // End loading state
    }

    load();
  }, [setIsLoading, setIsStatusError]);

  return municipalitiesOptions;
}
