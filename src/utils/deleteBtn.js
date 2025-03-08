import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";

export default function DeleteBtn({ user, handleClick }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await handleClick();
    setLoading(false);
    toast.success("La imagen ha sido eliminada de favoritos 👋!", {
      position: "top-right",
    });
  };

  if (user) {
    return (
      <>
        <DeleteIcon
          sx={{ cursor: "pointer", opacity: loading ? 0.5 : 1 }}
          onClick={handleDelete}
        />
        <ToastContainer autoClose={4000} />
      </>
    );
  } else {
    return <p>Inicia sesión para eliminar favoritos.</p>;
  }
}
