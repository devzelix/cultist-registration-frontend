/**
 * Represents an option in a dropdown or select input.
 */
export interface Option {
  key: number; // Unique identifier for the option.
  value: string; // Value to be used when selected.
  option: string; // Display label for the option.
}

/**
 * Structure of the form data.
 */
export interface FormValues {
  firstName: string; // User's first name.
  lastName: string; // User's last name.
  nationality: string; // User's nationality.
  idNumber: string; // User's ID number.
  birthDate: string; // User's birth date (ISO 8601 format).
  phonePrefix: string; // International phone prefix.
  phoneNumber: string; // User's phone number.
  email: string; // User's email address.
  instagramUser: string; // Instagram username.
  municipalityId: string; // Municipality ID.
  parishId: string; // Parish ID.
  homeAddress: string; // Home address.
  artCategoryId: string; // Art category ID.
  artDisciplineId: string; // Art discipline ID.
  yearsOfExperience: string; // Years of experience.
  groupName: string;
  hasDisability: string; // Indicates if the user has a disability.
  disability: string; // Disability details (if applicable).
  hasIllness: string; // Indicates if the user has an illness.
  illness: string; // Illness details (if applicable).
}

export interface FormErrors {
  firstNameError: string;
  lastNameError: string;
  idNumberError: string;
  birthDateError: string;
  phoneNumberError: string;
  emailError: string;
  instagramUserError: string;
  municipalityIdError: string;
  parishIdError: string;
  homeAddressError: string;
  artCategoryIdError: string;
  artDisciplineIdError: string;
  yearsOfExperienceError: string;
  groupNameError: string;
  disabilityError: string;
  illnessError: string;
}

export interface RequestBody {
  firstName: string;
  lastName: string;
  idNumber: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
  instagramUser: string;
  municipalityId: number;
  parishId: number;
  homeAddress: string;
  artCategoryId: number;
  artDisciplineId: number;
  yearsOfExperience: number;
  groupName: string;
  disability: string;
  illness: string;
}

export interface SuccessBody {
  id: number;
  firstName: string;
  lastName: string;
  idNumber: string;
  birthDate: Date;
  phoneNumber: string;
  email: string;
  instagramUser: string;
  municipalityId: number;
  parishId: number;
  homeAddress: string;
  artCategoryId: number;
  artDisciplineId: number;
  yearsOfExperience: number;
  groupName: string;
  disability: string;
  illness: string;
}

export interface ConflictBody {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}
