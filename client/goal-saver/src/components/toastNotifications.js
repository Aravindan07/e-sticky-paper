import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

function Notification(
  errMessage,
  errorMsg,
  errorMessage,
  SucMessage,
  successMsg,
  successMessage
) {
  if (errorMessage) {
    console.log("Inside error message", errorMessage);
    toast.error(errorMessage, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
    return;
  }
  if (successMessage) {
    console.log("Inside success message", successMessage);
    toast.success(successMessage, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
      hideProgressBar: true,
    });
    return;
  }
}

export default Notification;
