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
  hasDisability: string; // Indicates if the user has a disability.
  disability: string; // Disability details (if applicable).
  hasIllness: string; // Indicates if the user has an illness.
  illness: string; // Illness details (if applicable).
}
