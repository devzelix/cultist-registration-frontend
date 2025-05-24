import { useEffect, useState } from "react";
import refocusConflictField from "../utils/refocusConflictField";

/**
 * Custom hook to manage modal state related to conflict status and messages.
 *
 * Controls the display of conflict modal and manages page scroll behavior
 * when the modal is active.
 */
export default function useModal() {
  // State to track if there is a conflict status that triggers the modal
  const [isStatusConflict, setIsStatusConflict] = useState<boolean>(false);

  // State to hold the conflict message to display in the modal
  const [messageConflict, setMessageConflict] = useState<string>("");

  /**
   * Calls the utility to refocus on the conflicting field,
   * and resets modal states accordingly.
   */
  const focusConflictField = () =>
    refocusConflictField(
      setIsStatusConflict,
      messageConflict,
      setMessageConflict
    );

  // Effect to disable page scroll when conflict modal is open
  useEffect(() => {
    if (isStatusConflict) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isStatusConflict]);

  return {
    isStatusConflict,
    setIsStatusConflict,
    messageConflict,
    setMessageConflict,
    focusConflictField,
  };
}
