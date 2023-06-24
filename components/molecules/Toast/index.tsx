import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  return (
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
  );
};

export const showToast = (message: string) => {
  toast(message);
};
