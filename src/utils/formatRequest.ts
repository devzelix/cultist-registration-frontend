import formatDate from "./formatDate";
import formatString from "./formatString";
import type { FormValues, RequestBody } from "./interfaces";

/**
 * Transforms raw form values into a sanitized and properly formatted request body.
 *
 * This function applies string formatting, casing normalization, and type conversion
 * to prepare the data for submission.
 *
 * @param formValues - Raw input values from the form.
 * @returns A formatted request body object ready for API consumption.
 */
export default function formatRequest(formValues: FormValues): RequestBody {
  const body: RequestBody = {
    firstName: formatString(formValues.firstName),
    lastName: formatString(formValues.lastName),
    gender: formValues.gender.trim().toUpperCase(),
    idNumber:
      formValues.nationality.trim().toUpperCase() +
      "-" +
      formValues.idNumber.trim(),
    birthDate: formatDate(formValues.birthDate),
    phoneNumber:
      formValues.phonePrefix.trim() + "-" + formValues.phoneNumber.trim(),
    email: formValues.email.trim().toLowerCase(),
    instagramUser: formValues.instagramUser.trim().toLowerCase(),
    municipalityId: Number(formValues.municipalityId.trim()),
    parishId: Number(formValues.parishId.trim()),
    homeAddress: formatString(formValues.homeAddress),
    artCategoryId: Number(formValues.artCategoryId.trim()),
    artDisciplineId: Number(formValues.artDisciplineId.trim()),
    otherDiscipline: formatString(formValues.otherDiscipline),
    yearsOfExperience: Number(formValues.yearsOfExperience.trim()),
    groupName: formatString(formValues.groupName),
    disability: formValues.disability.trim().toLowerCase(),
    illness: formValues.illness.trim().toLowerCase(),
  };

  return body;
}
