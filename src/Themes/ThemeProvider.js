import React, {createContext, useContext, useState} from 'react';
import {darkTheme, defaultTheme} from './Customs';

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [isTheme, setTheme] = useState(defaultTheme);
  console.log(isTheme);
  return (
    <ThemeContext.Provider value={{theme: isTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemes = () => useContext(ThemeContext);

export default ThemeProvider;
