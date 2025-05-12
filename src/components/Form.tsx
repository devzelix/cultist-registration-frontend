import Input from "./Input";
import IdentityInput from "./IdentityInput";
import Select from "./Select";
import {
  nationalityOptions,
  phonePrefixOptions,
  municipalityOptions,
  parishOptions,
  artDisciplinesOptions,
} from "../utils/formOptions";
import { getMinBirthDate, getMaxBirthDate } from "../utils/birthDateRange";
import "../styles/global.css";
import logo1 from "../assets/images/logo-1.png";
import logo2 from "../assets/images/logo-2.png";
import userInputIcon from "../assets/images/user-input-icon.webp";
import idInputIcon from "../assets/images/id-input-icon.webp";
import phoneInputIcon from "../assets/images/phone-input-icon.webp";
import emailInputIcon from "../assets/images/emailInputIcon.webp";
import instagramInputIcon from "../assets/images/instagramInputIcon.webp";
import homeAddressInputIcon from "../assets/images/homeAddressInputIcon.webp";

export default function Form() {
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
            id="first-name"
            name="first-name"
            label="Nombres"
            width="w-full md:w-[45%]"
            icon={userInputIcon}
            error="¡ Ingrese un nombre válido !"
          />
          <Input
            type="text"
            placeholder="Ej. Solett Bustamante"
            id="last-name"
            name="last-name"
            label="Apellidos"
            width="w-full md:w-[45%]"
            icon={userInputIcon}
            error="¡ Ingrese un apellido válido !"
          />
          <IdentityInput
            idSelect="nationality"
            nameSelect="nationality"
            idInput="id-number"
            nameInput="id-number"
            labelSelect="nacionalidad"
            labelInput="Cédula de identidad"
            placeholder="Ej. 31456615"
            options={nationalityOptions}
            width="w-full md:w-[45%]"
            icon={idInputIcon}
            error="¡ Ingrese un número válido !"
          />
          <Input
            type="date"
            min={getMinBirthDate()}
            max={getMaxBirthDate()}
            id="birthdate"
            name="birthdate"
            label="Fecha de Nacimiento"
            width="w-full md:w-[45%]"
          />
          <IdentityInput
            idSelect="phone-prefix"
            nameSelect="phone-prefix"
            idInput="phone-number"
            nameInput="phone-number"
            labelSelect="prefijo del teléfono"
            labelInput="Número de Teléfono"
            placeholder="Ej. 4125472"
            options={phonePrefixOptions}
            width="w-full md:w-[45%]"
            icon={phoneInputIcon}
            error="¡ Ingrese un número válido !"
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
          />
          <Input
            type="text"
            placeholder="Ej. @josesolett"
            id="instagram"
            name="instagram"
            label="Usuario de Instagram"
            width="w-full md:w-[45%]"
            icon={instagramInputIcon}
            error="¡ Ingrese un usuario de instagram válido !"
          />
          <Select
            id="residenceMunicipality"
            name="residenceMunicipality"
            label="Municipio de Residencia"
            defaultOption="Seleccione su municipio..."
            options={municipalityOptions}
            width="w-full w-[45%]"
            error="¡ Seleccione su municipio de residencia !"
          />
          <Select
            id="parish"
            name="parish"
            label="Parroquia"
            defaultOption="Seleccione su parroquia..."
            options={parishOptions["valencia"]}
            width="w-full w-[45%]"
            error="¡ Seleccione su parroquia !"
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
          />
          <Select
            id="artDiscipline"
            name="artDiscipline"
            label="Disciplina Artística"
            defaultOption="Seleccione su disciplina..."
            options={artDisciplinesOptions}
            width="w-full w-[45%]"
            error="¡ Seleccione su disciplina !"
          />
          <Input
            type="number"
            min="1"
            max="100"
            id="yearsOfExperience"
            name="yearsOfExperience"
            label="Años de Trayectoria"
            width="w-full md:w-[45%]"
          />
        </div>
        <div className="flex mt-7 items-center justify-center">
          <button
            type="submit"
            className="w-9/12 h-11 border-2 rounded-3xl  border-secondary font-playfair font-bold text-text bg-secondary"
          >
            E N V I A R
          </button>
        </div>
      </form>
    </>
  );
}
