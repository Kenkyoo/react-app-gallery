import { getAuth, sendEmailVerification } from "firebase/auth";
import Button from "@mui/material/Button";

export default function SendEmail() {
  const auth = getAuth();
  return (
    <Button
      onClick={() => sendEmailVerification(auth.currentUser)}
      size="small"
    >
      Share
    </Button>
  );
}
