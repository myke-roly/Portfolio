import React from 'react';
import { ThemeProvider } from 'styled-components';

interface ContextProps {
  colors: {};
}

const lightTheme: ContextProps = {
  colors: {
    primary: '#ffffff',
    dark: '#1c2329',
    gray: '#eeeeee',
    third: '#1e3044',
    lightBlue: '#087baa',
  },
};

const darkTheme: ContextProps = {
  colors: {
    dark: '#fefefe',
    primary: '#1c2329',
    gray: '#333',
    third: '#1e3044',
    lightBlue: '#087baa',
  },
};

type theme = {
  themeMode?: string,
  toggleTheme: () => void
}

export const ContextTheme = React.createContext<theme | undefined>(undefined);
export default function ThemeContext(props: any): JSX.Element {
  const [themeMode, setThemeMode] = React.useState<string>('dark');
  const toggleTheme = (): void => setThemeMode(state => state === 'dark' ? 'light' : 'dark')

  return (
    <ContextTheme.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={themeMode !== 'dark' ? darkTheme : lightTheme}>
        {props.children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}