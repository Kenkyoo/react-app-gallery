import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function VideoGallery({ itemData, header }) {
  return (
    <>
      <Div>{header}</Div>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <Link to={`/videos/${item.id}`}>
              <img
                srcSet={`${item.videos.medium.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.videos.medium.thumbnail}?w=248&fit=crop&auto=format`}
                alt={item.views}
                loading="lazy"
                width={"100%"}
                height={200}
              />
            </Link>
            <ImageListItemBar
              title={<span>by: {item.user}</span>}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.views}`}
                >
                  <FavoriteIcon />
                  {item.likes}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
