import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import { getAll } from "../services/parishService";

/**
 * Custom hook to fetch and manage parish options for a select input.
 *
 * @param setIsLoading - Function to toggle loading state.
 * @param setIsStatusError - Function to toggle error state on fetch failure.
 * @returns parishesOptions - An object mapping keys to arrays of parish options.
 */
export default function useParishesOptions(
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsStatusError: Dispatch<SetStateAction<boolean>>
) {
  const [parishesOptions, setParishesOptions] = useState<
    Record<string, Option[]>
  >({});

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const data = await getAll();

      if (!data) {
        // Clear options and set error flag if fetch fails
        setParishesOptions({});
        setIsStatusError(true);
      } else {
        // Update options state with fetched data
        setParishesOptions(data);
      }

      setIsLoading(false);
    }

    load();
  }, [setIsLoading, setIsStatusError]);

  return parishesOptions;
}
