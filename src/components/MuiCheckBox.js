import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

const MuiCheckBox = () => {
  const [state, setState] = React.useState({
    html: false,
    css: false,
    js: false,
  });
  const { html, css, js } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  console.log(state);
  return (
    <Box>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">My Skills</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={html} onChange={handleChange} name="html" color="warning"/>
            }
            label="HTML"
          />
          <FormControlLabel
            control={
              <Checkbox checked={css} onChange={handleChange} name="css" color="warning"/>
            }
            label="CSS"
          />
          <FormControlLabel
            control={
              <Checkbox checked={js} onChange={handleChange} name="js" color="warning"/>
            }
            label="JavaScript"
          />
        </FormGroup>
        <FormHelperText>Plz enter your skills</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiCheckBox;
