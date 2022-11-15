import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState([]);

  const handleChange = (e)=>{
    setCountry(e.target.value)
  }
  
  console.log(country);
  return (
    <Box width={"350px"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Your Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Select Your Country"
          onChange={handleChange}
          multiple
        >
          <MenuItem value={"BD"}>Bangladesh</MenuItem>
          <MenuItem value={"CA"}>Canada</MenuItem>
          <MenuItem value={"US"}>USA</MenuItem>
          <MenuItem value={"AU"}>Australia</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
