import { useAuth } from "./authProvider";
import { useEffect } from "react";
import { DataContext } from "./dataProvider";
import { useContext } from "react";

export default function AuthHandler() {
  const { user } = useAuth();
  const dataContext = useContext(DataContext);

  useEffect(() => {
    if (user) {
      fetch(`${dataContext.server}/prisma/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          name: user.displayName,
        }),
      })
        .then((response) => response.json())
        .catch((error) => console.error("Error en autenticación:", error));
    }
  }, [user, dataContext.server]);

  return null;
}
