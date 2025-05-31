import Input from "./Input";
import IdentityInput from "./IdentityInput";
import Select from "./Select";
import ConditionalInput from "./ConditionalInput";
import {
  genderOptions,
  nationalityOptions,
  phonePrefixOptions,
} from "../utils/formOptions";
import {
  getMinimumBirthDate,
  getMaximumBirthDate,
} from "../utils/birthDateRange";
import logo1 from "../assets/images/logo-1.webp";
import logo2 from "../assets/images/logo-2.webp";
import userInputIcon from "../assets/images/user-input-icon.webp";
import idInputIcon from "../assets/images/id-input-icon.webp";
import phoneInputIcon from "../assets/images/phone-input-icon.webp";
import emailInputIcon from "../assets/images/email-input-icon.webp";
import instagramInputIcon from "../assets/images/instagram-input-icon.webp";
import homeAddressInputIcon from "../assets/images/home-address-input-icon.webp";
import groupNameInputIcon from "../assets/images/group-name-input-icon.webp";
import disabilityTypeInputIcon from "../assets/images/disability-type-input-icon.webp";
import illnessDetailsInputIcon from "../assets/images/illness-details-input-icon.webp";
import sendButtonIcon from "../assets/images/send-button-icon.webp";
import type { FormErrors, FormValues, Option } from "../utils/interfaces";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import usePreventUnload from "../hooks/usePreventUnload";

// Props definition for type safety and clarity
interface FormProps {
  formValues: FormValues;
  formErrors: FormErrors;
  municipalitiesOptions: Option[];
  artCategoriesOptions: Option[];
  availableParishes: Option[];
  availableArtDisciplines: Option[];
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

export default function Form({
  formValues,
  formErrors,
  municipalitiesOptions,
  artCategoriesOptions,
  availableParishes,
  availableArtDisciplines,
  handleChange,
  handleBlur,
  handleSubmit,
  isLoading,
}: FormProps) {
  // Prevent page unload if form has any input filled
  const shouldPreventUnload = Object.values(formValues).some(
    (value) => value !== ""
  );
  usePreventUnload(shouldPreventUnload);

  return (
    <>
      <form
        className="flex flex-col gap-y-7 md:gap-y-10 xl:gap-y-15"
        onSubmit={handleSubmit}
      >
        {/* Logos header */}
        <div className="w-full flex justify-between">
          <img src={logo1} className="size-25 md:size-40 xl:size-44" />
          <img src={logo2} className="size-25 md:size-40 xl:size-44" />
        </div>

        {/* Form title */}
        <p className="mb-2 text-3xl font-playfair font-bold text-center text-[#f3f3f3] md:mb-4 md:text-5xl xl:mb-13 xl:text-6xl">
          Formulario de Registro
        </p>

        {/* Form fields container */}
        <div className="w-full flex flex-col justify-between gap-y-12 md:gap-y-18 xl:flex-row xl:flex-wrap">
          {/* Text inputs */}
          <Input
            type="text"
            placeholder="Ej. María Fernanda"
            id="firstName"
            name="firstName"
            label="Nombres"
            icon={userInputIcon}
            error={formErrors.firstNameError}
            value={formValues.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            type="text"
            placeholder="Ej. Pérez Torres"
            id="lastName"
            name="lastName"
            label="Apellidos"
            icon={userInputIcon}
            error={formErrors.lastNameError}
            value={formValues.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Select dropdowns */}
          <Select
            id="gender"
            name="gender"
            label="Género"
            defaultOption="Seleccione su género..."
            options={genderOptions}
            error={formErrors.genderError}
            value={formValues.gender}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Identity input with select + text */}
          <IdentityInput
            idSelect="nationality"
            nameSelect="nationality"
            idInput="idNumber"
            nameInput="idNumber"
            labelSelect="nacionalidad"
            labelInput="Cédula de identidad"
            placeholder="Ej. 12345678"
            options={nationalityOptions}
            icon={idInputIcon}
            error={formErrors.idNumberError}
            valueSelect={formValues.nationality}
            valueInput={formValues.idNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Date input with min/max */}
          <Input
            type="date"
            min={getMinimumBirthDate()}
            max={getMaximumBirthDate()}
            id="birthDate"
            name="birthDate"
            label="Fecha de Nacimiento"
            error={formErrors.birthDateError}
            value={formValues.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Phone input with prefix */}
          <IdentityInput
            idSelect="phonePrefix"
            nameSelect="phonePrefix"
            idInput="phoneNumber"
            nameInput="phoneNumber"
            labelSelect="prefijo del teléfono"
            labelInput="Número de Teléfono"
            placeholder="Ej. 1234567"
            options={phonePrefixOptions}
            icon={phoneInputIcon}
            error={formErrors.phoneNumberError}
            valueSelect={formValues.phonePrefix}
            valueInput={formValues.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Email input */}
          <Input
            type="email"
            placeholder="Ej. mariaperez@email.com"
            id="email"
            name="email"
            label="Correo Electrónico"
            icon={emailInputIcon}
            error={formErrors.emailError}
            value={formValues.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Instagram username */}
          <Input
            type="text"
            placeholder="Ej. mariaartista"
            id="instagramUser"
            name="instagramUser"
            label="Usuario de Instagram"
            icon={instagramInputIcon}
            error={formErrors.instagramUserError}
            value={formValues.instagramUser}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Location select inputs */}
          <Select
            id="municipalityId"
            name="municipalityId"
            label="Municipio de Residencia"
            defaultOption="Seleccione su municipio..."
            options={municipalitiesOptions}
            error={formErrors.municipalityIdError}
            value={formValues.municipalityId}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Select
            id="parishId"
            name="parishId"
            label="Parroquia"
            defaultOption="Seleccione su parroquia..."
            options={availableParishes}
            disabled={availableParishes.length === 0}
            error={formErrors.parishIdError}
            value={formValues.parishId}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Address input */}
          <Input
            type="text"
            placeholder="Ej. Calle 10, Casa 12, El Centro"
            id="homeAddress"
            name="homeAddress"
            label="Dirección de Habitación"
            icon={homeAddressInputIcon}
            error={formErrors.homeAddressError}
            value={formValues.homeAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Art category and discipline selects */}
          <Select
            id="artCategoryId"
            name="artCategoryId"
            label="Cartegoría Artística"
            defaultOption="Seleccione su categoría..."
            options={artCategoriesOptions}
            error={formErrors.artCategoryIdError}
            value={formValues.artCategoryId}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Select
            id="artDisciplineId"
            name="artDisciplineId"
            label="Disciplina Artística"
            defaultOption="Seleccione su disciplina..."
            options={availableArtDisciplines}
            disabled={availableArtDisciplines.length === 0}
            error={formErrors.artDisciplineIdError}
            value={formValues.artDisciplineId}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Numeric input for years of experience */}
          <Input
            type="number"
            min="1"
            max="100"
            id="yearsOfExperience"
            name="yearsOfExperience"
            label="Años de Trayectoria"
            error={formErrors.yearsOfExperienceError}
            value={formValues.yearsOfExperience}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Group name input */}
          <Input
            type="text"
            placeholder="Ej. Grupo Cultural El Alba"
            id="groupName"
            name="groupName"
            label="Nombre de Agrupación"
            icon={groupNameInputIcon}
            error={formErrors.groupNameError}
            value={formValues.groupName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Conditional inputs: disability and illness */}
          <ConditionalInput
            groupName="hasDisability"
            label="¿Tiene alguna discapacidad?"
            idInput="disability"
            nameInput="disability"
            placeholder="Ingrese su discapacidad..."
            disabled={formValues.hasDisability !== "yes"}
            icon={disabilityTypeInputIcon}
            error={formErrors.disabilityError}
            groupValue={formValues.hasDisability}
            inputValue={formValues.disability}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ConditionalInput
            groupName="hasIllness"
            label="¿Sufre alguna Enfermedad?"
            idInput="illness"
            nameInput="illness"
            placeholder="Ingrese la enfermedad..."
            disabled={formValues.hasIllness !== "yes"}
            icon={illnessDetailsInputIcon}
            error={formErrors.illnessError}
            groupValue={formValues.hasIllness}
            inputValue={formValues.illness}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        {/* Submit button */}
        <div className="flex mt-7 items-center justify-center md:mt-9 xl:mt-15">
          <button
            type="submit"
            className="w-9/12 h-14 flex items-center justify-center gap-x-2.5 rounded-3xl border-secondary font-playfair font-bold text-text bg-secondary active:scale-95 transition-transform duration-100 md:w-[70%] md:h-21 md:gap-x-4 md:rounded-4xl md:text-2xl xl:w-1/2"
            disabled={isLoading}
          >
            <img src={sendButtonIcon} alt="" className="size-5 md:size-8" />E N
            V I A R
          </button>
        </div>
      </form>
    </>
  );
}
