import { getMaxBirthDate } from "./birthDateRange";
import type { FormValues } from "./interfaces";

export const initialFormValues: FormValues = {
  firstName: "",
  lastName: "",
  nationality: "V",
  idNumber: "",
  birthDate: getMaxBirthDate(),
  phonePrefix: "0412",
  phoneNumber: "",
  email: "",
  instagramUser: "",
  municipalityId: "0",
  parishId: "0",
  homeAddress: "",
  artCategoryId: "0",
  artDisciplineId: "0",
  yearsOfExperience: "1",
  hasDisability: "no",
  disability: "",
  hasIllness: "no",
  illness: "",
};
