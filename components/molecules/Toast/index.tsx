import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  return (
    <div className="toast">
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export const showToast = (message: string) => {
  toast(message);
};
