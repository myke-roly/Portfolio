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
    secondary: '#1e3044',
    lightBlue: '#087baa',
  },
};

const darkTheme: ContextProps = {
  colors: {
    dark: '#fefefe',
    primary: '#1c2329',
    gray: '#333',
    secondary: '#1e3044',
    lightBlue: '#087baa',
  },
};

type theme = {
  toggleTheme: () => any;
  theme?: string;
}

export const ContextTheme = React.createContext<Partial<theme>>({});
function ThemeContext(props: any): JSX.Element {
  
  const [modeTheme, setModeTheme] = React.useState(true);
  
  const valueContext: theme = {
    toggleTheme: () => setModeTheme(!modeTheme),
  };

  return (
    <ContextTheme.Provider value={valueContext}>
      <ThemeProvider theme={modeTheme ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}

export default ThemeContext;
