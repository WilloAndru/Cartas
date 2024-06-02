import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {

  const [value, setValue] = useState({});

  const setData = (id, vida, imgSup, energia, costoUlti, ultiActiva) => {
    setValue(prev => ({
      ...prev,
      id,
      [id]: {
        vida: vida,
        imgSup: imgSup,
        energia: energia,
        costoUlti: costoUlti,
        ultiActiva: ultiActiva
      }
    }));
  };

  return (
    <MyContext.Provider value={{ value, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };