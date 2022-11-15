import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";

const MuiRadio = () => {
  return (
    <Box padding={"40px 0px"}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio color="error" />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="success" />}
            label="Male"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="secondary" />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
