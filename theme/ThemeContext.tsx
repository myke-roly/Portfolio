import React from 'react';
import { ThemeProvider } from 'styled-components';

interface ContextProps {
  colors: {};
}

const lightTheme: ContextProps = {
  colors: {
    primary: '#ffffff',
    secondary: '#1c2329',
    gray: '#eeeeee',
    third: '#1e3044',
    lightBlue: '#087baa',
    default: '#000000',
  },
};

const darkTheme: ContextProps = {
  colors: {
    secondary: '#fefefe',
    primary: '#1c2329',
    gray: '#333',
    third: '#1e3044',
    lightBlue: '#087baa',
    default: '#ffffff',
  },
};

type themeI = {
  themeMode?: string;
  toggleTheme: () => void;
};

export const ContextTheme = React.createContext({} as themeI);
export default function ThemeContext(props: any): JSX.Element {
  const [themeMode, setThemeMode] = React.useState<themeI['themeMode']>('dark');
  const toggleTheme: themeI['toggleTheme'] = (): void =>
    setThemeMode((state) => (state === 'dark' ? 'light' : 'dark'));

  return (
    <ContextTheme.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={themeMode !== 'dark' ? darkTheme : lightTheme}>
        {props.children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}
