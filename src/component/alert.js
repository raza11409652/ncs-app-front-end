import { toast } from "react-toastify";

export const notifyToast = (message) =>
  toast(message, { position: "top-center" });
export const notifyWarning = (message) =>
  toast.warning(message, { position: "top-center" });
export const notifyError = (message) =>
  toast.error(message, { position: "top-center" });
export const notifySuccess = (message) =>
  toast.success(message, { position: "top-center" });
