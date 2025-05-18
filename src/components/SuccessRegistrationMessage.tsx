import statusCreatedIcon from "../assets/images/status-created-icon.webp";

export default function SuccessRegistrationMessage() {
  return (
    <>
      <img src={statusCreatedIcon} alt="" className="size-25" />
      <h1 className="mt-3 font-playfair font-bold text-text text-3xl">
        ¡ Registro exitoso !
      </h1>
      <p className="-mt-0.5 font-inter font-medium text-text text-center text-md">
        Gracias por unirse a la gran familia de cultores de Carabobo
      </p>
      <div className="mt-20 relative w-4/5 flex flex-col items-center">
        <p className="absolute -left-0.5 bottom-3.5 font-inter font-plain text-text text-sm">
          Redirigiendo a inicio...
        </p>
        <span className="w-full h-3 redirecting"></span>
      </div>
    </>
  );
}
