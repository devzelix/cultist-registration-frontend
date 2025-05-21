import { useEffect } from "react";

export default function usePreventUnload(shouldPrevent: boolean) {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (shouldPrevent) {
        e.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [shouldPrevent]);
}
