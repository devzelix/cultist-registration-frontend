import Input from "./Input";
import IdentityInput from "./IdentityInput";
import Select from "./Select";
import ConditionalInput from "./ConditionalInput";
import { nationalityOptions, phonePrefixOptions } from "../utils/formOptions";
import { getMinBirthDate, getMaxBirthDate } from "../utils/birthDateRange";
import logo1 from "../assets/images/logo-1.png";
import logo2 from "../assets/images/logo-2.png";
import userInputIcon from "../assets/images/user-input-icon.webp";
import idInputIcon from "../assets/images/id-input-icon.webp";
import phoneInputIcon from "../assets/images/phone-input-icon.webp";
import emailInputIcon from "../assets/images/email-input-icon.webp";
import instagramInputIcon from "../assets/images/instagram-input-icon.webp";
import homeAddressInputIcon from "../assets/images/home-address-input-icon.webp";
import disabilityTypeInputIcon from "../assets/images/disability-type-input-icon.webp";
import illnessDetailsInputIcon from "../assets/images/illness-details-input-icon.webp";
import sendButtonIcon from "../assets/images/send-button-icon.webp";
import type { FormErrors, FormValues, Option } from "../utils/interfaces";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";

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
  return (
    <>
      <form className="flex flex-col gap-y-7" onSubmit={handleSubmit}>
        <div className="w-full flex justify-between">
          <img src={logo1} className="size-25 md:size-40" />
          <img src={logo2} className="size-25 md:size-40" />
        </div>
        <p className="mb-2 text-3xl font-playfair font-bold text-center text-[#f3f3f3] sm:text-4xl md:text-5xl md:mb-7">
          Formulario de Registro
        </p>
        <div className="w-full flex flex-col justify-between gap-y-12 md:flex-row md:flex-wrap md:gap-y-14">
          <Input
            type="text"
            placeholder="Ej. José Ángel"
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
            placeholder="Ej. Solett Bustamante"
            id="lastName"
            name="lastName"
            label="Apellidos"
            icon={userInputIcon}
            error={formErrors.lastNameError}
            value={formValues.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <IdentityInput
            idSelect="nationality"
            nameSelect="nationality"
            idInput="idNumber"
            nameInput="idNumber"
            labelSelect="nacionalidad"
            labelInput="Cédula de identidad"
            placeholder="Ej. 31456615"
            options={nationalityOptions}
            icon={idInputIcon}
            error={formErrors.idNumberError}
            valueSelect={formValues.nationality}
            valueInput={formValues.idNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            type="date"
            min={getMinBirthDate()}
            max={getMaxBirthDate()}
            id="birthDate"
            name="birthDate"
            label="Fecha de Nacimiento"
            error={formErrors.birthDateError}
            value={formValues.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <IdentityInput
            idSelect="phonePrefix"
            nameSelect="phonePrefix"
            idInput="phoneNumber"
            nameInput="phoneNumber"
            labelSelect="prefijo del teléfono"
            labelInput="Número de Teléfono"
            placeholder="Ej. 4125472"
            options={phonePrefixOptions}
            icon={phoneInputIcon}
            error={formErrors.phoneNumberError}
            valueSelect={formValues.phonePrefix}
            valueInput={formValues.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            type="email"
            placeholder="Ej. ejemplo@email.com"
            id="email"
            name="email"
            label="Correo Electrónico"
            icon={emailInputIcon}
            error={formErrors.emailError}
            value={formValues.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            type="text"
            placeholder="Ej. josesolett"
            id="instagramUser"
            name="instagramUser"
            label="Usuario de Instagram"
            icon={instagramInputIcon}
            error={formErrors.instagramUserError}
            value={formValues.instagramUser}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Select
            id="municipalityId"
            name="municipalityId"
            label="Municipio de Residencia"
            defaultOption="Seleccione su municipio..."
            options={municipalitiesOptions}
            width="w-full md:w-[45%]"
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
            width="w-full md:w-[45%]"
            error={formErrors.parishIdError}
            value={formValues.parishId}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            type="text"
            placeholder="Ej. urb. Llano Verde, edificio 3"
            id="homeAddress"
            name="homeAddress"
            label="Dirección de Habitación"
            icon={homeAddressInputIcon}
            error={formErrors.homeAddressError}
            value={formValues.homeAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Select
            id="artCategoryId"
            name="artCategoryId"
            label="Cartegoría Artística"
            defaultOption="Seleccione su categoría..."
            options={artCategoriesOptions}
            width="w-full md:w-[45%]"
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
            width="w-full md:w-[45%]"
            error={formErrors.artDisciplineIdError}
            value={formValues.artDisciplineId}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
          <Input
            type="text"
            placeholder="Ej. Gota Dulce Teatro"
            id="groupName"
            name="groupName"
            label="Nombre de Agrupación"
            icon={homeAddressInputIcon}
            error={formErrors.groupNameError}
            value={formValues.groupName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ConditionalInput
            width="w-full md:w-[45%]"
            groupName="hasDisability"
            label="¿Tiene alguna discapacidad?"
            idInput="disability"
            nameInput="disability"
            placeholder="Ingrese su discapacidad..."
            disabled={formValues.hasDisability === "yes" ? false : true}
            icon={disabilityTypeInputIcon}
            error={formErrors.disabilityError}
            groupValue={formValues.hasDisability}
            inputValue={formValues.disability}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ConditionalInput
            width="w-full md:w-[45%]"
            groupName="hasIllness"
            label="¿Sufre alguna Enfermedad?"
            idInput="illness"
            nameInput="illness"
            placeholder="Ingrese la enfermedad..."
            disabled={formValues.hasIllness === "yes" ? false : true}
            icon={illnessDetailsInputIcon}
            error={formErrors.illnessError}
            groupValue={formValues.hasIllness}
            inputValue={formValues.illness}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="flex mt-7 items-center justify-center md:mt-9">
          <button
            type="submit"
            className="w-9/12 h-14 flex items-center justify-center gap-x-2.5 border-2 rounded-3xl border-secondary font-playfair font-bold text-text bg-secondary active:scale-95 transition-transform duration-100"
            disabled={isLoading}
          >
            <img src={sendButtonIcon} alt="" className="size-5 md:size-7" />E N
            V I A R
          </button>
        </div>
      </form>
    </>
  );
}
