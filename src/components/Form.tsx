import Input from "./Input";
import InputPhone from "./InputPhone";
import Select from "./Select";
import {
  optionsDiscipline,
  optionsMunicipe,
  optionsParroquia,
  optionsPrefix,
} from "../utils/formOptions";

export default function Form() {
  return (
    <>
      <form className="w-[100%] pt-10 pr-6 pb-15 pl-6 flex flex-col gap-y-7 rounded-[30px] bg-[#f3f3f3]/25 shadow-2xl md:w-[50%] md:p-16 md:pb-22">
        <div className="w-[100%] flex justify-between">
          <img src="/src/assets/logo-1.png" className="size-25 md:size-45" />
          <img src="/src/assets/logo-2.png" className="size-25 md:size-45" />
        </div>
        <p className="mb-2 text-3xl font-bold text-center text-[#f3f3f3] md:text-5xl md:mb-7">
          Registro de Cultores
        </p>
        <div className="w-[100%] flex flex-col justify-between gap-y-12 md:flex-row md:flex-wrap">
          <Input
            type="text"
            placeholder="Ej: Jose Angel"
            id="firstName"
            name="firstName"
            label="Nombres"
            width="w-[100%] md:w-[45%]"
          />
          <Input
            type="text"
            placeholder="Ej: Solett Bustamante"
            id="lastName"
            name="lastName"
            label="Apellidos"
            width="w-[100%] md:w-[45%]"
          />
          <Input
            type="text"
            placeholder="Ej: 31456615"
            id="idNumber"
            name="idNumber"
            label="Cédula de Identidad"
            width="w-[100%] md:w-[45%]"
          />
          <Select
            id="residenceMunicipality"
            name="residenceMunicipality"
            label="Municipio de Residencia"
            defaultOption="Seleccione el municipio..."
            options={optionsMunicipe}
            width="w-[100%] md:w-[45%]"
          />
          <Select
            id="parroquia"
            name="parroquia"
            label="Parroquia"
            defaultOption="Seleccione la parroquia..."
            options={optionsParroquia}
            width="w-[100%] md:w-[45%]"
          />
          <InputPhone
            idPrefix="prefix"
            namePrefix="prefix"
            idNumber="phoneNumber"
            nameNumber="phoneNumber"
            labelPrefix="prefijo del numero de telefono"
            labelNumber="Numero de Telefono"
            placeholder="Ej: 4332151"
            options={optionsPrefix}
            width="w-[100%] md:w-[45%]"
            error="Numero de telefono invalido!"
          />
          <Input
            type="text"
            placeholder="Ingrese su direccion..."
            id="streetAddress"
            name="streetAddress"
            label="Direccion de Habitacion"
            width="w-[100%] md:w-[45%]"
          />
          <Input
            type="date"
            placeholder=""
            id="birthday"
            name="birthday"
            label="Fecha de Nacimiento"
            width="w-[100%] md:w-[45%]"
          />
          <Input
            type="email"
            placeholder="Ej: josesolett@gmail.com"
            id="email"
            name="email"
            label="Correo Electronico"
            width="w-[100%] md:w-[45%]"
          />
          <Input
            type="text"
            placeholder="Ej: @josesolett"
            id="instagram"
            name="instagram"
            label="Instagram"
            width="w-[100%] md:w-[45%]"
          />
          <Select
            id="discipline"
            name="discipline"
            label="Disciplina Artistica"
            defaultOption="Seleccione la disciplina..."
            options={optionsDiscipline}
            width="w-[100%] md:w-[45%]"
          />
          <Input
            type="text"
            placeholder="Ej: Danzas Mujica"
            id="nameGroup"
            name="nameGroup"
            label="Nombre de la Agrupacion"
            width="w-[100%] md:w-[45%]"
          />
        </div>
      </form>
    </>
  );
}
