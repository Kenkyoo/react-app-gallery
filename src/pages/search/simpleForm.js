import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import visuallyHidden from "@mui/utils/visuallyHidden";

export default function SimpleForm({ handleSubmit, register }) {
  return (
    <form onSubmit={handleSubmit}>
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
  );
}
