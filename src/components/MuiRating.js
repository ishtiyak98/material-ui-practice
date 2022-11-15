import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Stack, Rating } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState(0.0);

  console.log(value);
  return (
    <Box width="fit-content" padding={"20px 0px"}>
      <Stack spacing={1}>
        <Rating
          name="half-rating"
          value={value}
          precision={0.5}
          size="large"
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" color="primary" />}
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </Box>
  );
};

export default MuiRating;
