import { useState } from "react";
import "./App.css";

import MuiButton from "./components/MuiButton";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiRadio from "./components/MuiRadio";
import { MuiSelect } from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import { MuiTextField } from "./components/MuiTextField";
import MuiRating from "./components/MuiRating";

function App() {
  return (
    <div className="App">
      <MuiButton></MuiButton>
      <MuiTextField></MuiTextField>
      <MuiSelect></MuiSelect>
      <MuiRadio></MuiRadio>
      <MuiCheckBox></MuiCheckBox>
      <MuiSwitch></MuiSwitch>
      <MuiRating></MuiRating>
    </div>
  );
}

export default App;
