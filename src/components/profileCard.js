import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import SendEmail from "../firebase/sendEmailVerification";

export default function ProfileCard({
  uid,
  name,
  email,
  photo,
  lastSign,
  emailVerified,
}) {
  return (
    <Card key={uid} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={photo} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {email}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Last sign: {lastSign}
        </Typography>
      </CardContent>
      <CardActions>
        {emailVerified ? (
          <Alert severity="success">Email verificado</Alert>
        ) : (
          <>
            <Alert severity="warning">Email no verificado</Alert>
            <SendEmail />
          </>
        )}
      </CardActions>
    </Card>
  );
}
