import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Option } from "../utils/interfaces";
import { getAll } from "../services/municipalityService";

export default function useMunicipalitiesOptions(
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsStatusError: Dispatch<SetStateAction<boolean>>
) {
  const [municipalitiesOptions, setMunicipalitiesOptions] = useState<Option[]>(
    []
  );

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const data = await getAll();
      if (!data) {
        setMunicipalitiesOptions([]);
        setIsStatusError(true);
      } else {
        setMunicipalitiesOptions(data);
      }
      setIsLoading(false);
    }
    load();
  }, [setIsLoading, setIsStatusError]);

  return municipalitiesOptions;
}
