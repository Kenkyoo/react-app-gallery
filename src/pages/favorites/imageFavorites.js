import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FavoritesImageList({ itemData, header }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          color: "text.secondary",
          width: { sm: "100%", md: "80%" },
        }}
      >
        {header}
      </Typography>

      <ImageList variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <>
            <ImageListItem
              onClick={handleOpen}
              key={item.id}
              sx={{ cursor: "pointer" }}
            >
              <img
                srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                width={"100%"}
                height={200}
              />
            </ImageListItem>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.image}?w=161&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
            </Modal>
          </>
        ))}
      </ImageList>
    </>
  );
}
