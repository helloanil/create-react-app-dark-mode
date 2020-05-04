import React from "react";

export const DarkModeContext = React.createContext({ isDarkModeOn: false });

export const DarkModeContextProvider = ({ children }) => {
  const [isDarkModeOn, setIsDarkModeOn] = React.useState(false);

  const toggleDarkMode = () => setIsDarkModeOn(!isDarkModeOn);

  return (
    <DarkModeContext.Provider value={{ isDarkModeOn, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
