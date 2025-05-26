import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "../assets/images/404-error-icon.webp";

// NotFound component: displays a 404 error page and redirects to "/registro" after 5 seconds
export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 | Página no encontrada";
    // Set a 5-second timer to redirect the user to the /registro route
    const timer = setTimeout(() => {
      navigate("/registro");
    }, 5000);

    // Clear the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-20 md:gap-y-40 override-height">
      {/* 404 error image */}
      <img src={ErrorIcon} alt="404 error" className="size-50 md:size-65" />

      {/* Main error message */}
      <p className="-mt-10 font-inter font-medium text-xl text-center md:-mt-20 md:text-3xl">
        ¡Oops! Página no encontrada
      </p>

      {/* Subtext with explanation */}
      <p className="pr-15 pl-15 -mt-20 font-inter font-normal text-sm text-center md:-mt-38 md:text-lg">
        La página que estás buscando no existe o fue movida
      </p>

      {/* Redirect message and optional loader animation */}
      <div className="mt-10 flex flex-col items-center justify-center gap-y-12 md:gap-y-15">
        {/* You can style this span as a loader */}
        <span className="size-3 redirecting-registry"></span>
        <p className="font-inter font-medium text-[0.7rem] text-center md:text-[1rem]">
          Redirigiendo a registro . . .
        </p>
      </div>
    </div>
  );
}
