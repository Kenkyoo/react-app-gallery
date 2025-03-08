import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase.js";

export const login = async () => {
  await signInWithPopup(auth, provider);
};

export const logout = () => {
  signOut(auth);
};
