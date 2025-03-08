import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authProvider";
import { DataContext } from "../context/dataProvider";
import { useContext } from "react";
import SaveBtn from "./saveBtn";

export default function Save({ item }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { user } = useAuth();
  const dataContext = useContext(DataContext);
  useEffect(() => {
    if (!selectedItem || !user) return; // Evita hacer la petición si falta algo

    const saveFavorite = async () => {
      try {
        const response = await fetch(`${dataContext.server}/prisma/saves`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.uid,
            imageData: {
              url: selectedItem.largeImageURL,
              title: selectedItem.user,
            },
          }),
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    saveFavorite();
  }, [selectedItem, user, dataContext.server]);
  // Se ejecuta cuando selectedItemId cambia

  const handleClick = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  return <SaveBtn user={user} handleClick={() => handleClick(item)} />;
}
