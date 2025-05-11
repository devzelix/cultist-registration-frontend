import { useState } from "react";
import { parishOptions } from "../utils/formOptions";
import type { Option } from "../utils/interfaces";

export default function useLinkedSelects() {
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>("");
  const [availableParishes, setAvailableParishes] = useState<Option[]>([]);
  const handleMunicipalityChange = (value: string) => {
    setSelectedMunicipality(value);
    setAvailableParishes(parishOptions[value] || []);
  };
  return {
    selectedMunicipality,
    availableParishes,
    handleMunicipalityChange,
  };
}
