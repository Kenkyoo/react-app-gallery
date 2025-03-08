import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

export const Profile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <button disabled>Cargando...</button>;
  if (user) {
    console.log("ID del usuario:", user.uid);
    console.log("Nombre:", user.displayName);
    console.log("Avatar:", user.photoURL);
  }
};
