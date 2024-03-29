import React, { createContext, useState, useEffect, ReactNode } from 'react';
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDarkMode: () => {},
});

interface DarkModeProviderProps {
  children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(getMode());

  const toggleDarkMode = () => {
    setDarkMode(state => !state);
  };

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getMode(): boolean {
    const savedMode = JSON.parse(localStorage.getItem('dark') || 'false');
    return savedMode;
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
