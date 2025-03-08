import { styled } from "@mui/material/styles";
import useSWR from "swr";

const StyledBox = styled("div")(({ theme, image }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "#bfc8d9",
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

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Hero() {
  const { data, error } = useSWR(
    `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`,
    fetcher
  );
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;
  return <StyledBox image={data.hits[0].largeImageURL} />;
}
