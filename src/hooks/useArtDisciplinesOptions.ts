import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import { getAll } from "../services/artDisciplineService";

export default function useArtDisciplinesOptions(
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsStatusError: Dispatch<SetStateAction<boolean>>
) {
  const [artDisciplinesOptions, setArtDisciplinesOptions] = useState<
    Record<string, Option[]>
  >({});

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const data = await getAll();
      if (!data) {
        setArtDisciplinesOptions({});
        setIsStatusError(true);
      } else {
        setArtDisciplinesOptions(data);
      }
      setIsLoading(false);
    }
    load();
  }, [setIsLoading, setIsStatusError]);

  return artDisciplinesOptions;
}
