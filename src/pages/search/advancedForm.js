import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const colors = [
  "grayscale",
  "transparent",
  "red",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "lilac",
  "pink",
  "white",
  "gray",
  "black",
  "brown",
];

export default function Form({ handleSubmit, register }) {
  return (
    <Grid container spacing={2}>
      <FormControl fullWidth onSubmit={handleSubmit}>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="first-name" required>
            Search images
          </FormLabel>
          <OutlinedInput
            id="first-name"
            name="first-name"
            type="name"
            placeholder="John"
            autoComplete="first name"
            required
            size="small"
            {...register("q")}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="last-name" required>
            Image type:
          </FormLabel>
          <Select
            labelId="image-type"
            label="Image Type"
            id="image_type
  "
            {...register("image_type")}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="photo">Photo</MenuItem>
            <MenuItem value="illustration">Illustration</MenuItem>
            <MenuItem value="vector">Vector</MenuItem>
          </Select>
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <InputLabel id="demo-simple-Select-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-Select-label"
            id="demo-simple-Select"
            label="Categories"
            {...register("category")}
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="backgrounds">Backgrounds</MenuItem>
            <MenuItem value="fashion">Fashion</MenuItem>
            <MenuItem value="nature">Nature</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="education">Education</MenuItem>
            <MenuItem value="feelings">Feelings</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="people">People</MenuItem>
            <MenuItem value="religion">Religion</MenuItem>
            <MenuItem value="places">Places</MenuItem>
            <MenuItem value="animals">Animals</MenuItem>
            <MenuItem value="industry">Industry</MenuItem>
            <MenuItem value="computer">Computer</MenuItem>
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="transportation">Transportation</MenuItem>
            <MenuItem value="travel">Travel</MenuItem>
            <MenuItem value="buildings">Buildings</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="music">Music</MenuItem>
          </Select>
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="address2">Colors</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {colors.map((color) => (
              <FormControlLabel
                key={color}
                value={color}
                control={<Radio {...register("colors")} />}
                label={color}
              />
            ))}
          </RadioGroup>
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="city" required>
            Orientation
          </FormLabel>
          <Select
            labelId="orientation"
            label="Orientation"
            id="orientation"
            {...register("orientation")}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="horizontal">Horizontal</MenuItem>
            <MenuItem value="vertical">Vertical</MenuItem>
          </Select>
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="state" required>
            Order
          </FormLabel>
          <InputLabel id="order">Image type</InputLabel>
          <Select
            labelId="order"
            label="Order"
            id="order"
            {...register("order")}
          >
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="latest">Latest</MenuItem>
          </Select>
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="country" required>
            Editor choice
          </FormLabel>
          <FormControlLabel
            required
            control={<Checkbox {...register("editors_choice")} />}
            label="Editor's
          Choice"
          />
        </FormGrid>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </FormControl>
    </Grid>
  );
}
