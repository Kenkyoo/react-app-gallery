import Grid from "@mui/material/Grid2";
import Profile from "./profile";
import Favorites from "../favorites/favorites";

export default function ProfilePage() {
  return (
    <Grid
      container
      direction="row"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Grid size={{ xs: 12, sm: 2, md: 4 }}>
        <Profile />
      </Grid>
      <Grid size={{ xs: 12, sm: 10, md: 8 }}>
        <Favorites />
      </Grid>
    </Grid>
  );
}
