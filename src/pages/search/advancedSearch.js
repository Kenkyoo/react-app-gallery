import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { DataContext } from "../../context/dataProvider";
import axios from "axios";
import ImageGallery from "../../components/imageList";
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
  marginTop: "20px",
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

export default function Search() {
  const [results, setResults] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataContext = useContext(DataContext);

  const onSubmit = async (data) => {
    const getData = data;
    try {
      const response = await axios.get(
        `${dataContext.server}/search/advanced`,
        {
          params: {
            q: getData.q,
            category: getData.category,
            order: getData.order,
            colors: getData.colors,
          },
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error al enviar al backend:", error);
    }
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        gap={4}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 3, md: 4 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="first-name" required>
              Search images
            </FormLabel>
            <OutlinedInput
              id="first-name"
              name="first-name"
              type="name"
              placeholder="Wallpapers, nature, animals"
              autoComplete="wallpapers..."
              required
              size="small"
              {...register("q")}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="last-name">Image type:</FormLabel>
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
          <FormGrid size={{ xs: 12, md: 6 }}>
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
            <FormLabel htmlFor="city">Orientation</FormLabel>
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
            <FormLabel htmlFor="state">Order</FormLabel>
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
            <FormLabel htmlFor="country">Editor choice</FormLabel>
            <FormControlLabel
              control={<Checkbox {...register("editors_choice")} />}
              label="Editor's
          Choice"
            />
          </FormGrid>
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </Grid>
      {errors.exampleRequired && <span>This field is required</span>}
      <ImageGallery header={""} itemData={results} />
    </div>
  );
}
