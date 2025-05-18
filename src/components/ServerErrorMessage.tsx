import statusErrorImage from "../assets/images/status-error-icon.webp";

export default function ServerErrorMessage() {
  return (
    <>
      <img src={statusErrorImage} alt="" className="w-4xl" />
      <h1 className="font-playfair font-bold text-center text-text text-4xl">
        ¡Ups!
      </h1>
      <p className="mt-2 font-inter font-medium text-center text-text text-sm">
        Parece que no podemos conectar con el servidor. Por favor, inténtelo de
        nuevo en unos minutos.
      </p>
    </>
  );
}
