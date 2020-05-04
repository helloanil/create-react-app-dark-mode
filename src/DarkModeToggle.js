import React from "react";
import { DarkModeContext } from "./DarkModeContext";

const DarkModeToggle = () => {
  const { toggleDarkMode } = React.useContext(DarkModeContext);

  return <button onClick={toggleDarkMode}>I'm Dark Mode Toggle</button>;
};

export default DarkModeToggle;
