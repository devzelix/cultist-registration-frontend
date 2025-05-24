import statusErrorImage from "../assets/images/status-error-icon.webp";

export default function ServerErrorMessage() {
  return (
    <>
      {/* Error icon image */}
      <img src={statusErrorImage} alt="" className="w-4xl md:w-xl xl:w-lg" />

      {/* Main error heading */}
      <h1 className="font-playfair font-bold text-center text-text text-4xl md:-mt-4 md:text-6xl xl:mt-3">
        ¡Ups!
      </h1>

      {/* Error description message */}
      <p className="mt-2 font-inter font-medium text-center text-text text-sm md:mt-4 md:text-2xl xl:mt-7">
        Parece que no podemos conectar con el servidor. Por favor, inténtelo de
        nuevo en unos minutos . . .
      </p>
    </>
  );
}
