import {
  Button,
  ButtonGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import React, { useState } from "react";
import { Check } from "@mui/icons-material";

const MuiButton = () => {
  const [alignment, setAlignment] = useState("left");
  const [selected, setSelected] = React.useState(false);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Stack direction={"column"} justifyContent="center" spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="text" color="success">
          Text
        </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          Click Me Color
        </Button>
        <Button variant="contained" color="secondary">
          Click Me Color
        </Button>
        <Button variant="contained" color="error">
          Click Me Color
        </Button>
        <Button variant="contained" color="success">
          Click Me Color
        </Button>
        <Button variant="contained" color="warning">
          Click Me Color
        </Button>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <ToggleButtonGroup
          orientation="horizontal"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          color="error"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButton
          value="check"
          color="success"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <Check />
        </ToggleButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
