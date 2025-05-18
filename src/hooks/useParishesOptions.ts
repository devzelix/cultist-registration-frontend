import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import { getAll } from "../services/parishService";

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
        setParishesOptions({});
        setIsStatusError(true);
      } else {
        setParishesOptions(data);
      }
      setIsLoading(false);
    }
    load();
  }, [setIsLoading, setIsStatusError]);

  return parishesOptions;
}
