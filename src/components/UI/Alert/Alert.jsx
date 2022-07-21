import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function Alert({ title, text, icon, confirmText, navigation }) {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const titleAlert = title || "Alert";
  const textAlert = text || "Harga tawarmu berhasil dikirim ke penjual";
  const iconAlert = icon || "success";
  const confirmTextAlert = confirmText || "OK";
  const navigationLink = navigation ? `${navigation}/notifbuyer` : "";

  const alertOpen = () => {
    MySwal.fire({
      title: titleAlert,
      text: textAlert,
      icon: iconAlert,
      showCancelButton: true,
      confirmButtonColor: "#0D28A6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmTextAlert,
    }).then((result) => {
      if (result.value) {
        navigate("/notifbuyer");
      }
    });
  };
  return alertOpen();
}

export default Alert;
