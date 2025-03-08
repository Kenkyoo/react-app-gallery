import FavoriteIcon from "@mui/icons-material/Favorite";
import SimpleSnackbar from "../components/snackbar";
import { ToastContainer, toast } from "react-toastify";

export default function SaveBtn({ user, handleClick }) {
  const topRight = () => {
    toast.success("Congrats!! La imagen ha sido añadida a favoritos 👋!", {
      position: "top-right",
    });
  };
  if (user) {
    return (
      <>
        <FavoriteIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleClick();
            topRight();
          }}
        />
        <ToastContainer autoClose={4000} />
      </>
    );
  } else {
    return <SimpleSnackbar />;
  }
}
