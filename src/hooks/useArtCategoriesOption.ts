import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import { getAll } from "../services/artCategoryService";

export default function useArtCategoriesOptions(
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsStatusError: Dispatch<SetStateAction<boolean>>
) {
  const [artCategoriesOptions, setArtCategoriesOptions] = useState<Option[]>(
    []
  );

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const data = await getAll();
      if (!data) {
        setArtCategoriesOptions([]);
        setIsStatusError(true);
      } else {
        setArtCategoriesOptions(data);
      }
      setIsLoading(false);
    }
    load();
  }, [setIsLoading, setIsStatusError]);

  return artCategoriesOptions;
}
