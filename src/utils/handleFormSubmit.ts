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
import { create } from "../services/cultistService";
import formatRequest from "./formatRequest";
import determinateFieldConflict from "./determinateFieldConflict";

export default async function handleFormSubmit<K extends keyof FormValues>(
  e: FormEvent,
  formValues: FormValues,
  setFormErrors: Dispatch<SetStateAction<FormErrors>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsError: Dispatch<SetStateAction<boolean>>,
  setIsCreated: Dispatch<SetStateAction<boolean>>,
  setStatusConflict: Dispatch<SetStateAction<boolean>>,
  setMessageConflict: Dispatch<SetStateAction<string>>
) {
  e.preventDefault();

  const tempErrors: FormErrors = {
    firstNameError: validateName("firstName" as K, formValues.firstName),
    lastNameError: validateName("lastName" as K, formValues.lastName),
    genderError: validateSelect("gender" as K, formValues.gender),
    idNumberError: validateIdNumber(formValues.idNumber),
    birthDateError: validateBirthDate(formValues.birthDate),
    phoneNumberError: validatePhoneNumber(formValues.phoneNumber),
    emailError: validateEmail(formValues.email),
    instagramUserError: validateInstagramUser(formValues.instagramUser),
    municipalityIdError: validateSelect(
      "municipalityId" as K,
      formValues.municipalityId
    ),
    parishIdError: validateSelect("parishId" as K, formValues.parishId),
    homeAddressError: validateHomeAddress(formValues.homeAddress),
    artCategoryIdError: validateSelect(
      "artCategoryId" as K,
      formValues.artCategoryId
    ),
    artDisciplineIdError: validateSelect(
      "artDisciplineId" as K,
      formValues.artDisciplineId
    ),
    yearsOfExperienceError: validateYearsOfExperience(
      formValues.yearsOfExperience
    ),
    groupNameError:
      formValues.groupName.length > 0
        ? validateDescriptionField("groupName" as K, formValues.groupName)
        : "",
    disabilityError:
      formValues.hasDisability === "yes"
        ? validateDescriptionField("disability" as K, formValues.disability)
        : "",
    illnessError:
      formValues.hasIllness === "yes"
        ? validateDescriptionField("illness" as K, formValues.illness)
        : "",
  };

  setFormErrors(tempErrors);

  if (
    !Object.values(tempErrors).some((error) => {
      return error !== "";
    })
  ) {
    setIsLoading(true);
    const response = await create(formatRequest(formValues));
    setIsLoading(false);
    if (!response) {
      setIsError(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if ("status" in response && response.status === 409) {
      setStatusConflict(true);
      setMessageConflict(determinateFieldConflict(response.error));
    } else {
      setIsCreated(true);
      setTimeout(() => {
        window.location.href = "http://cultura.carabobo.gob.ve/";
      }, 5000);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } else {
    const errorFieldOrder: (keyof FormErrors)[] = [
      "firstNameError",
      "lastNameError",
      "genderError",
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
      "groupNameError",
      "disabilityError",
      "illnessError",
    ];

    for (const errorKey of errorFieldOrder) {
      if (tempErrors[errorKey]) {
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
