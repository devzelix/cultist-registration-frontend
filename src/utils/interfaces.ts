/**
 * Represents an option for dropdown or select inputs.
 */
export interface Option {
  key: number; // Unique identifier
  value: string; // Value used on selection
  option: string; // Display label
}

/**
 * Form data structure.
 */
export interface FormValues {
  firstName: string;
  lastName: string;
  gender: string;
  nationality: string;
  idNumber: string;
  birthDate: string; // ISO 8601 date string
  phonePrefix: string;
  phoneNumber: string;
  email: string;
  instagramUser: string;
  municipalityId: string;
  parishId: string;
  homeAddress: string;
  artCategoryId: string;
  artDisciplineId: string;
  yearsOfExperience: string;
  groupName: string;
  hasDisability: string;
  disability: string;
  hasIllness: string;
  illness: string;
}

/**
 * Validation error messages corresponding to FormValues fields.
 */
export interface FormErrors {
  firstNameError: string;
  lastNameError: string;
  genderError: string;
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

/**
 * Data sent in API request payload.
 * Numeric IDs are converted to numbers.
 */
export interface RequestBody {
  firstName: string;
  lastName: string;
  gender: string;
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

/**
 * Response body returned upon successful form submission.
 */
export interface SuccessBody {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
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

/**
 * Error response body for conflict (e.g., duplicate data).
 */
export interface ConflictBody {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}
