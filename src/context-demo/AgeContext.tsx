import React, { createContext, useContext, useState } from 'react';

export interface IAgeContext {
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
}

const AgeContext = createContext({} as IAgeContext);

function useAgeContext() {
  const { age, setAge } = useContext(AgeContext);
  if (!age) {
    throw new Error(`can not use 'useAge' outside of AgeProvider`);
  }
  return {
    age,
    setAge,
  };
}

interface AgeProviderProps {
  children: React.ReactNode;
}

const AgeProvider: React.FC<AgeProviderProps> = ({ children }) => {
  const [age, setAge] = useState<number>(1);

  return (
    <AgeContext.Provider
      value={{
        age,
        setAge,
      }}
    >
      {children}
    </AgeContext.Provider>
  );
};

export { AgeProvider, useAgeContext };
