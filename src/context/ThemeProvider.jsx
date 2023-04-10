import React from "react";
import { useState } from "react";
import { useContext } from "react";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEITRAL = "neitral";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(THEME_LIGHT);
  const change = (name) => {
    setTheme(name);
  };
  return (
    <ThemeContext.Provider
      value={{
        selectTheme: theme,
        changeTheme: change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
