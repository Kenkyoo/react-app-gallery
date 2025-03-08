import { useState } from "react";
import Switch from "@mui/material/Switch";
import Videos from "../videos/videos";
import Images from "../images/images";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Home() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography>Videos</Typography>
        <Switch checked={checked} onChange={handleChange} label="Videos" />
        <Typography>Images</Typography>
      </Stack>
      {checked ? <Images /> : <Videos />}
    </>
  );
}
