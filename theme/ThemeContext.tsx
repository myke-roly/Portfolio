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
    linearGradiant: 'linear-gradient(128.82deg, #000000 2.6%, rgba(4, 31, 33, 0.78) 41.93%, rgba(4, 31, 33, 0.64) 54.88%, rgba(0, 0, 0, 0.71) 94.7%)',
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
    linearGradiant: 'linear-gradient(127.91deg, #90BFDF 1.4%, #FDFEFF 43.33%, #F5FAFE 51.45%, #FFFFFF 58.4%, #FFFFFF 61.89%, #E3F2FC 77.9%, #C4E3F8 100%)',
  },
};

type themeI = {
  themeMode?: string;
  toggleTheme: () => void;
};

export const ContextTheme = React.createContext({} as themeI);
export default function ThemeContext(props: any): JSX.Element {
  const [themeMode, setThemeMode] = React.useState<themeI['themeMode']>('dark');
  const toggleTheme: themeI['toggleTheme'] = (): void => setThemeMode((state) => (state === 'dark' ? 'light' : 'dark'));

  return (
    <ContextTheme.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={themeMode !== 'dark' ? darkTheme : lightTheme}>{props.children}</ThemeProvider>
    </ContextTheme.Provider>
  );
}
