import { Stack, TextField } from "@mui/material";
import React from "react";

export const MuiTextField = () => {
  return (
    <Stack spacing={4} sx={{ padding: "40px 0px" }}>
      <Stack direction={"row"} spacing={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
    </Stack>
  );
};
