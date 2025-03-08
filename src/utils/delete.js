import React from "react";
import { useAuth } from "../context/authProvider";
import { DataContext } from "../context/dataProvider";
import { useContext } from "react";
import DeleteBtn from "./deleteBtn";

export default function Delete({ itemId }) {
  const { user } = useAuth();
  const dataContext = useContext(DataContext);

  const deleteFavorite = async () => {
    if (!user || !itemId) return;

    try {
      const response = await fetch(`${dataContext.server}/prisma/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.uid, itemId }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al eliminar favorito:", error);
    }
  };

  return <DeleteBtn user={user} handleClick={deleteFavorite} />;
}
