import { useContext } from "react";
import { ErrorContext } from "../context/errorContext";
export const useError = () => {
  return useContext(ErrorContext);
};
