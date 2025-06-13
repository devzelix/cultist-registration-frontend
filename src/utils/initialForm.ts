import { getMaximumBirthDate } from "./birthDateRange";
import type { FormErrors, FormValues } from "./interfaces";

/**
 * Default initial values for the form.
 * birthDate is set to the maximum allowed birth date.
 */
export const initialFormValues: FormValues = {
  firstName: "",
  lastName: "",
  gender: "0",
  nationality: "V",
  idNumber: "",
  birthDate: getMaximumBirthDate(),
  phonePrefix: "0412",
  phoneNumber: "",
  email: "",
  instagramUser: "",
  municipalityId: "0",
  parishId: "0",
  homeAddress: "",
  artCategoryId: "0",
  artDisciplineId: "0",
  isOtherDiscipline: false,
  otherDiscipline: "",
  yearsOfExperience: "1",
  groupName: "",
  hasDisability: "no",
  disability: "",
  hasIllness: "no",
  illness: "",
};

/**
 * Initial state for form validation errors, all empty strings by default.
 */
export const initialFormErrors: FormErrors = {
  firstNameError: "",
  lastNameError: "",
  genderError: "",
  idNumberError: "",
  birthDateError: "",
  phoneNumberError: "",
  emailError: "",
  instagramUserError: "",
  municipalityIdError: "",
  parishIdError: "",
  homeAddressError: "",
  artCategoryIdError: "",
  artDisciplineIdError: "",
  otherDisciplineError: "",
  yearsOfExperienceError: "",
  groupNameError: "",
  disabilityError: "",
  illnessError: "",
};
