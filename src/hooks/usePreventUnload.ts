import { useEffect } from "react";

/**
 * Custom hook to prevent page unload (e.g., accidental navigation or refresh)
 * when the `shouldPrevent` flag is true.
 *
 * @param shouldPrevent - Boolean flag to enable or disable unload prevention.
 */
export default function usePreventUnload(shouldPrevent: boolean) {
  useEffect(() => {
    // Handler to prevent unload if shouldPrevent is true
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (shouldPrevent) {
        e.preventDefault();
      }
    };

    // Attach event listener to intercept unload events
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup listener on unmount or when shouldPrevent changes
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [shouldPrevent]);
}
