import { useState } from "react";
import "./App.css";

import MuiButton from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextField";

function App() {
  return (
    <div className="App">
      <MuiButton></MuiButton>
      <MuiTextField></MuiTextField>
    </div>
  );
}

export default App;
