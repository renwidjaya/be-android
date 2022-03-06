import React, {createContext, useContext, useState} from 'react';
import ID from './ID.json';

export const LangContext = createContext();

const LangProvider = ({children}) => {
  const [isLang, setLang] = useState(ID);

  return (
    <LangContext.Provider value={{lang: isLang}}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

export default LangProvider;
