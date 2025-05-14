import type { Dispatch, FormEvent, SetStateAction } from "react";
import validateName from "./validateName";
import type { FormErrors, FormValues } from "./interfaces";
import validateBirthDate from "./validateBirthDate";
import validateIdNumber from "./validateIdNumber";
import validatePhoneNumber from "./validatePhoneNumber";
import validateEmail from "./validateEmail";
import validateInstagramUser from "./validateInstagramUser";
import validateSelect from "./validateSelect";
import validateHomeAddress from "./validateHomeAddress";
import validateYearsOfExperience from "./validateYearsOfExperience";
import validateDescriptionField from "./validateDescriptionField";

export default function handleFormSubmit<K extends keyof FormValues>(
  e: FormEvent,
  formValues: FormValues,
  formError: FormErrors,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
) {
  e.preventDefault();

  const firstNameError = validateName("firstName" as K, formValues.firstName);
  const lastNameError = validateName("lastName" as K, formValues.lastName);
  const idNumberError = validateIdNumber(formValues.idNumber);
  const birthDateError = validateBirthDate(formValues.birthDate);
  const phoneNumberError = validatePhoneNumber(formValues.phoneNumber);
  const emailError = validateEmail(formValues.email);
  const instagramUserError = validateInstagramUser(formValues.instagramUser);
  const municipalityIdError = validateSelect(
    "municipalityId" as K,
    formValues.municipalityId
  );
  const parishIdError = validateSelect("parishId" as K, formValues.parishId);
  const homeAddressError = validateHomeAddress(formValues.homeAddress);
  const artCategoryIdError = validateSelect(
    "artCategoryId" as K,
    formValues.artCategoryId
  );
  const artDisciplineIdError = validateSelect(
    "artDisciplineId" as K,
    formValues.artDisciplineId
  );
  const yearsOfExperienceError = validateYearsOfExperience(
    formValues.yearsOfExperience
  );
  const disabilityError =
    formValues.hasDisability === "yes"
      ? validateDescriptionField("disability" as K, formValues.disability)
      : "";
  const illnessError =
    formValues.hasIllness === "yes"
      ? validateDescriptionField("illness" as K, formValues.illness)
      : "";

  setFormErrors({
    firstNameError: firstNameError,
    lastNameError: lastNameError,
    idNumberError: idNumberError,
    birthDateError: birthDateError,
    phoneNumberError: phoneNumberError,
    emailError: emailError,
    instagramUserError: instagramUserError,
    municipalityIdError: municipalityIdError,
    parishIdError: parishIdError,
    homeAddressError: homeAddressError,
    artCategoryIdError: artCategoryIdError,
    artDisciplineIdError: artDisciplineIdError,
    yearsOfExperienceError: yearsOfExperienceError,
    disabilityError: disabilityError,
    illnessError: illnessError,
  });

  if (
    !Object.values(formError).some((error) => {
      console.log(error);
      return error !== "";
    })
  ) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("¡Formulario enviado!");
    }, 2000);
  } else {
    const errorFieldOrder: (keyof FormErrors)[] = [
      "firstNameError",
      "lastNameError",
      "idNumberError",
      "birthDateError",
      "phoneNumberError",
      "emailError",
      "instagramUserError",
      "municipalityIdError",
      "parishIdError",
      "homeAddressError",
      "artCategoryIdError",
      "artDisciplineIdError",
      "yearsOfExperienceError",
      "disabilityError",
      "illnessError",
    ];

    for (const errorKey of errorFieldOrder) {
      if (formError[errorKey]) {
        const inputName = errorKey.replace("Error", "");
        const field = document.querySelector(
          `[name="${inputName}"]`
        ) as HTMLElement;
        field.focus();
        break;
      }
    }
  }
}
