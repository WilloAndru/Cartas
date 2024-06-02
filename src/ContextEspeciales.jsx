import React, { createContext, useState } from 'react';

const MyContextEsp = createContext();

const MyContextProviderEsp = ({ children }) => {
  const [valueEsp, setValue] = useState({});

  const setDataEsp = (id, display, estado=false) => {
    setValue(prev => ({
      ...prev,
      id,
      estado,
      [id]: {
        display: display
      }
    }));
    !estado
  };

  return (
    <MyContextEsp.Provider value={{ valueEsp, setDataEsp }}>
      {children}
    </MyContextEsp.Provider>
  );
};

export { MyContextEsp, MyContextProviderEsp };