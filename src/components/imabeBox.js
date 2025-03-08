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
import Save from "../utils/save";

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
  image,
  tags,
  user,
  avatar,
  views,
  downloads,
  likes,
  comments,
  item,
}) {
  const StyledBox = styled("div")(({ theme }) => ({
    alignSelf: "center",
    width: "100%",
    height: 400,
    marginTop: theme.spacing(8),
    marginBottom: "20px",
    borderRadius: "20px",
    outline: "6px solid",
    outlineColor: "hsla(220, 25%, 80%, 0.2)",
    border: "1px solid",
    borderColor: (theme.vars || theme).palette.grey[200],
    boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
      height: 700,
    },
    ...theme.applyStyles("dark", {
      boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
      backgroundImage: `url(${image})`,
      outlineColor: "hsla(220, 20%, 42%, 0.1)",
      borderColor: (theme.vars || theme).palette.grey[700],
    }),
  }));
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
      <StyledBox id="image" />
      <span sx={{ marginTop: "20px" }}>
        Añadir esta imagen a tus favoritos <Save item={item} />
      </span>
      <Box
        id="logoCollection"
        sx={{ py: 2, justifyContent: "center", alignItems: "center" }}
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
          sx={{ justifyContent: "center", mt: 2.5, opacity: 0.6 }}
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
