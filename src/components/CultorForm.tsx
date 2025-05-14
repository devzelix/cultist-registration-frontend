import Input from "./Input";
import IdentityInput from "./IdentityInput";
import Select from "./Select";
import ConditionalInput from "./ConditionalInput";
import {
  nationalityOptions,
  phonePrefixOptions,
  municipalityOptions,
  artCategoriesOptions,
} from "../utils/formOptions";
import { getMinBirthDate, getMaxBirthDate } from "../utils/birthDateRange";
import useCultorForm from "../hooks/useCultorForm";
import "../styles/global.css";
import logo1 from "../assets/images/logo-1.png";
import logo2 from "../assets/images/logo-2.png";
import userInputIcon from "../assets/images/user-input-icon.webp";
import idInputIcon from "../assets/images/id-input-icon.webp";
import phoneInputIcon from "../assets/images/phone-input-icon.webp";
import emailInputIcon from "../assets/images/emailInputIcon.webp";
import instagramInputIcon from "../assets/images/instagramInputIcon.webp";
import homeAddressInputIcon from "../assets/images/homeAddressInputIcon.webp";
import disabilityTypeInputIcon from "../assets/images/disabilityTypeInputIcon.webp";
import illnessDetailsInputIcon from "../assets/images/illnessDetailsInputIcon.webp";
import sendButtonIcon from "../assets/images/sendButtonIcon.webp";

export default function CultorForm() {
  const {
    formValues,
    formErrors,
    availableParishes,
    availableArtDisciplines,
    handleChange,
    handleBlur,
    handleFocus,
  } = useCultorForm();

  return (
    <>
      <form className="w-full pt-10 pr-5 pb-15 pl-5 flex flex-col gap-y-7 rounded-4xl bg-[#f3f3f3]/5 backdrop-blur-xs shadow-2xl">
        <div className="w-full flex justify-between">
          <img src={logo1} className="size-25 md:size-45" />
          <img src={logo2} className="size-25 md:size-45" />
        </div>
        <p className="mb-2 text-3xl font-playfair font-bold text-center text-[#f3f3f3] md:text-5xl md:mb-7">
          Formulario de Registro
        </p>
        <div className="w-[100%] flex flex-col justify-between gap-y-12 md:flex-row md:flex-wrap">
          <Input
            type="text"
            placeholder="Ej. José Ángel"
            id="firstName"
            name="firstName"
            label="Nombres"
            width="w-full md:w-[45%]"
            icon={userInputIcon}
            error={formErrors.firstNameError}
            value={formValues.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Input
            type="text"
            placeholder="Ej. Solett Bustamante"
            id="lastName"
            name="lastName"
            label="Apellidos"
            width="w-full md:w-[45%]"
            icon={userInputIcon}
            error={formErrors.lastNameError}
            value={formValues.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
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
            width="w-full md:w-[45%]"
            icon={idInputIcon}
            error={formErrors.idNumberError}
            valueSelect={formValues.nationality}
            valueInput={formValues.idNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Input
            type="date"
            min={getMinBirthDate()}
            max={getMaxBirthDate()}
            id="birthDate"
            name="birthDate"
            label="Fecha de Nacimiento"
            width="w-full md:w-[45%]"
            error={formErrors.birthDateError}
            value={formValues.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
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
            width="w-full md:w-[45%]"
            icon={phoneInputIcon}
            error={formErrors.phoneNumberError}
            valueSelect={formValues.phonePrefix}
            valueInput={formValues.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Input
            type="email"
            placeholder="Ej. ejemplo@email.com"
            id="email"
            name="email"
            label="Correo Electrónico"
            width="w-full md:w-[45%]"
            icon={emailInputIcon}
            error={formErrors.emailError}
            value={formValues.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Input
            type="text"
            placeholder="Ej. josesolett"
            id="instagramUser"
            name="instagramUser"
            label="Usuario de Instagram"
            width="w-full md:w-[45%]"
            icon={instagramInputIcon}
            error={formErrors.instagramUserError}
            value={formValues.instagramUser}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Select
            id="municipalityId"
            name="municipalityId"
            label="Municipio de Residencia"
            defaultOption="Seleccione su municipio..."
            options={municipalityOptions}
            width="w-full md:w-[45%]"
            error={formErrors.municipalityIdError}
            value={formValues.municipalityId}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
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
            onFocus={handleFocus}
          />
          <Input
            type="text"
            placeholder="Ej. urb. Llano Verde, edificio 3"
            id="homeAddress"
            name="homeAddress"
            label="Dirección de Habitación"
            width="w-full md:w-[45%]"
            icon={homeAddressInputIcon}
            error={formErrors.homeAddressError}
            value={formValues.homeAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
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
            onFocus={handleFocus}
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
            onFocus={handleFocus}
          />
          <Input
            type="number"
            min="1"
            max="100"
            id="yearsOfExperience"
            name="yearsOfExperience"
            label="Años de Trayectoria"
            width="w-full md:w-[45%]"
            error={formErrors.yearsOfExperienceError}
            value={formValues.yearsOfExperience}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
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
            onFocus={handleFocus}
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
            onFocus={handleFocus}
          />
        </div>
        <div className="flex mt-7 items-center justify-center">
          <button
            type="submit"
            className="w-9/12 h-14 flex items-center justify-center gap-x-2.5 border-2 rounded-3xl  border-secondary font-playfair font-bold text-text bg-secondary"
          >
            <img src={sendButtonIcon} alt="" className="size-5" />E N V I A R
          </button>
        </div>
      </form>
    </>
  );
}
