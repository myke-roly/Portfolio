import React from 'react';
import { ThemeProvider } from 'styled-components';


interface ContextProps {
  colors: {}
}
const theme: ContextProps = {
  colors: {
    primary: '#ffffff',
    dark: '#1c2329',
    gray: '#eeeeee',
    secondary: '#1e3044',
    lightBlue: '#087baa',
  }
};

export const Store = React.createContext<ContextProps>(theme);
function ThemeContext(props: any): JSX.Element {
  return <ThemeProvider theme={theme}>
    { props.children }
  </ThemeProvider>
}

export default ThemeContext;