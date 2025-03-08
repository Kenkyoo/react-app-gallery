import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Save from "../utils/save";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function ImageGallery({ itemData, header }) {
  return (
    <>
      <Div>{header}</Div>
      <ImageList cols={3} rowHeight={300} spacing={2}>
        {itemData.map((item) => (
          <Link to={`/images/${item.id}`}>
            <ImageListItem key={item.id}>
              <img
                srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
                alt={item.user}
                loading="lazy"
              />

              <ImageListItemBar
                title={<span>by: {item.user}</span>}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.views}`}
                  >
                    <Save item={item} />
                    {item.likes}
                  </IconButton>
                }
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </>
  );
}
