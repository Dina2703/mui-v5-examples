import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

function RateExample() {
  const [value, setValue] = useState(null);
  return (
    <Box
      sx={{
        "& > legend": { mt: 8 },
      }}
    >
      <Typography variant="h6">Rating Examples</Typography>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating
        name="read-only"
        // value={value}
        readOnly
        size="large"
        defaultValue={2.5}
        precision={0.5}
      />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled size="small" />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderSharpIcon fontSize="inherit" />}
      />
    </Box>
  );
}

export default RateExample;
