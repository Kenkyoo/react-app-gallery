import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import ProfileCard from "../../components/profileCard";

export default function Profile() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <button disabled>Cargando...</button>;
  if (user) {
    const profile = user?.providerData[0];
    const lastSign = user?.metadata.lastSignInTime;
    const emailVerified = user?.emailVerified;
    return (
      <ProfileCard
        uid={profile.uid}
        name={profile.displayName}
        photo={profile.photoURL}
        email={profile.email}
        lastSign={lastSign}
        emailVerified={emailVerified}
      />
    );
  } else {
    return <h4>Necesitas inciar sesion para ver tu perfil</h4>;
  }
}
