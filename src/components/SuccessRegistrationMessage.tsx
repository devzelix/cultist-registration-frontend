import statusCreatedIcon from "../assets/images/status-created-icon.webp";

export default function SuccessRegistrationMessage() {
  return (
    <>
      {/* Success icon */}
      <img src={statusCreatedIcon} alt="" className="size-25 md:size-37" />

      {/* Main success message */}
      <h1 className="mt-3 font-playfair font-bold text-text text-3xl md:mt-7 md:text-5xl xl:mt-10">
        ¡ Registro exitoso !
      </h1>

      {/* Subtext thanking the user */}
      <p className="-mt-0.5 font-inter font-medium text-text text-center text-md md:mt-3 md:text-2xl">
        Gracias por unirse a la gran familia de cultores de Carabobo
      </p>

      {/* Redirecting message and progress bar */}
      <div className="mt-20 relative w-4/5 flex flex-col items-center md:mt-25 md:w-3/5 xl:w-2/5">
        {/* Text indicating redirection */}
        <p className="absolute -left-0.5 bottom-3.5 font-inter font-plain text-text text-sm md:left-0 md:text-lg">
          Redirigiendo a inicio...
        </p>

        {/* Visual progress indicator */}
        <span className="w-full h-3 redirecting-home"></span>
      </div>
    </>
  );
}
