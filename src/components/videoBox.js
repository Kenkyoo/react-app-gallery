import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ReactPlayer from "react-player";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function ImageBox({
  video,
  tags,
  user,
  avatar,
  views,
  downloads,
  likes,
  comments,
}) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Stack direction="row" spacing={2}>
        <Typography variant="h3" gutterBottom>
          {user}
        </Typography>
        <Avatar alt={user} src={avatar} />
      </Stack>
      <ReactPlayer
        url={video}
        controls={true}
        loop={true}
        sx={{ borderRadius: "20px", marginTop: "20px" }}
      />
      <Box
        id="logoCollection"
        sx={{
          py: 2,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Item>
            <VisibilityIcon /> {views}
          </Item>
          <Item>
            <ArrowDownwardIcon /> {downloads}
          </Item>
          <Item>
            <FavoriteIcon /> {likes}
          </Item>
          <Item>
            <ModeCommentIcon /> {comments}
          </Item>
        </Stack>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            mt: 2.5,
            opacity: 0.6,
          }}
        >
          {tags?.split(", ").map((tag, index) => (
            <Grid item key={index}>
              <Chip label={tag} color="primary" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
