import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { useContext, useState } from "react";
import { DataContext } from "../../context/dataProvider";
import axios from "axios";
import ImageGallery from "../../components/imageList";

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
      const response = await axios.get(`${dataContext.server}/search/simple`, {
        params: {
          q: getData.q,
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error al enviar al backend:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          {/* Campo de búsqueda */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
          >
            <InputLabel htmlFor="images-hero" sx={visuallyHidden}>
              Search
            </InputLabel>
            <TextField
              id="images-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Search images"
              placeholder="Search images"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Search images",
                },
              }}
              {...register("q")}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
            >
              Search
            </Button>
          </Stack>
        </FormControl>
      </form>
      {errors.exampleRequired && <span>This field is required</span>}
      <ImageGallery header="" itemData={results} />
    </div>
  );
}
