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
import useForm from "../hooks/useForm";
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

export default function Form() {
  const {
    formValues,
    availablesParishes,
    availablesArtDisciplines,
    handleChange,
  } = useForm();

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
            error="¡ Ingrese un nombre válido !"
            value={formValues.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Ej. Solett Bustamante"
            id="lastName"
            name="lastName"
            label="Apellidos"
            width="w-full md:w-[45%]"
            icon={userInputIcon}
            error="¡ Ingrese un apellido válido !"
            value={formValues.lastName}
            onChange={handleChange}
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
            error="¡ Ingrese un número válido !"
            valueSelect={formValues.nationality}
            valueInput={formValues.idNumber}
            onChange={handleChange}
          />
          <Input
            type="date"
            min={getMinBirthDate()}
            max={getMaxBirthDate()}
            id="birthDate"
            name="birthDate"
            label="Fecha de Nacimiento"
            width="w-full md:w-[45%]"
            value={formValues.birthDate}
            onChange={handleChange}
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
            error="¡ Ingrese un número válido !"
            valueSelect={formValues.phonePrefix}
            valueInput={formValues.phoneNumber}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Ej. ejemplo@email.com"
            id="email"
            name="email"
            label="Correo Electrónico"
            width="w-full md:w-[45%]"
            icon={emailInputIcon}
            error="¡ ingrese un correo electrónico válido !"
            value={formValues.email}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Ej. @josesolett"
            id="instagramUser"
            name="instagramUser"
            label="Usuario de Instagram"
            width="w-full md:w-[45%]"
            icon={instagramInputIcon}
            error="¡ Ingrese un usuario de instagram válido !"
            value={formValues.instagramUser}
            onChange={handleChange}
          />
          <Select
            id="municipalityId"
            name="municipalityId"
            label="Municipio de Residencia"
            defaultOption="Seleccione su municipio..."
            options={municipalityOptions}
            width="w-full md:w-[45%]"
            error="¡ Seleccione su municipio de residencia !"
            value={formValues.municipalityId}
            onChange={handleChange}
          />
          <Select
            id="parishId"
            name="parishId"
            label="Parroquia"
            defaultOption="Seleccione su parroquia..."
            options={availablesParishes}
            disabled={availablesParishes.length === 0}
            width="w-full md:w-[45%]"
            error="¡ Seleccione su parroquia !"
            value={formValues.parishId}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Ej. urb. Llano Verde, edificio 3"
            id="homeAddress"
            name="homeAddress"
            label="Dirección de Habitación"
            width="w-full md:w-[45%]"
            icon={homeAddressInputIcon}
            error="¡ Ingrese una dirección válida !"
            value={formValues.homeAddress}
            onChange={handleChange}
          />
          <Select
            id="artCategoryId"
            name="artCategoryId"
            label="Cartegoría Artística"
            defaultOption="Seleccione su categoría..."
            options={artCategoriesOptions}
            width="w-full md:w-[45%]"
            error="¡ Seleccione su categoría !"
            value={formValues.artCategoryId}
            onChange={handleChange}
          />
          <Select
            id="artDisciplineId"
            name="artDisciplineId"
            label="Disciplina Artística"
            defaultOption="Seleccione su disciplina..."
            options={availablesArtDisciplines}
            disabled={availablesArtDisciplines.length === 0}
            width="w-full md:w-[45%]"
            error="¡ Seleccione su disciplina !"
            value={formValues.artDisciplineId}
            onChange={handleChange}
          />
          <Input
            type="number"
            min="1"
            max="100"
            id="yearsOfExperience"
            name="yearsOfExperience"
            label="Años de Trayectoria"
            width="w-full md:w-[45%]"
            value={formValues.yearsOfExperience}
            onChange={handleChange}
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
            error="¡ Ingrese su discapacidad !"
            groupValue={formValues.hasDisability}
            inputValue={formValues.disability}
            onChange={handleChange}
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
            error="¡ Ingrese la enfermedad !"
            groupValue={formValues.hasIllness}
            inputValue={formValues.illness}
            onChange={handleChange}
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
