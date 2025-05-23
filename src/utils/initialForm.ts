import { getMaxBirthDate } from "./birthDateRange";
import type { FormErrors, FormValues } from "./interfaces";

/**
 * Initial values for the form fields, providing default values to ensure form completeness.
 *
 * Default values are set for fields like nationality, phone prefix, and disability status.
 * Special logic is used for birthDate to get the latest valid date.
 */
export const initialFormValues: FormValues = {
  firstName: "", // Default to empty string for first name.
  lastName: "", // Default to empty string for last name.
  gender: "0",
  nationality: "V", // Default nationality set to "V".
  idNumber: "", // Default to empty string for ID number.
  birthDate: getMaxBirthDate(), // Get the maximum valid birth date from utility function.
  phonePrefix: "0412", // Default phone prefix for Venezuela.
  phoneNumber: "", // Default to empty string for phone number.
  email: "", // Default to empty string for email.
  instagramUser: "", // Default to empty string for Instagram username.
  municipalityId: "0", // Default to "0" for municipality ID (unassigned).
  parishId: "0", // Default to "0" for parish ID (unassigned).
  homeAddress: "", // Default to empty string for home address.
  artCategoryId: "0", // Default to "0" for art category ID (unassigned).
  artDisciplineId: "0", // Default to "0" for art discipline ID (unassigned).
  yearsOfExperience: "1", // Default to "1" year of experience.
  groupName: "",
  hasDisability: "no", // Default to "no" for disability status.
  disability: "", // Default to empty string for disability details.
  hasIllness: "no", // Default to "no" for illness status.
  illness: "", // Default to empty string for illness details.
};

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
  yearsOfExperienceError: "",
  groupNameError: "",
  disabilityError: "",
  illnessError: "",
};
