import { useEffect, useState } from "react";
import refocusConflictField from "../utils/refocusConflictField";

export default function useModal() {
  const [isStatusConflict, setIsStatusConflict] = useState<boolean>(false);
  const [messageConflict, setMessageConflict] = useState<string>("");

  const focusConflictField = () =>
    refocusConflictField(
      setIsStatusConflict,
      messageConflict,
      setMessageConflict
    );

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
