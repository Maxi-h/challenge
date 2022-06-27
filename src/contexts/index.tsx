// Vendors
import React, {createContext, useState} from 'react';

// Types
type ContextParams = {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

type ProviderParams = {
  children: JSX.Element;
};

// Context
export const Context = createContext<ContextParams | Record<string, never>>({});

// Provider
export const Provider = ({children}: ProviderParams): JSX.Element => {
  // Current color theme (light or dark)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  return (
    <Context.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}>
      {children}
    </Context.Provider>
  );
};

export default {Context, Provider};
