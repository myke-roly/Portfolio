import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const darkTheme = {
  colors: {
    primary: '#ffffff',
    dark: '#1c2329',
    gray: '#eeeeee',
    secondary: '#1e3044',
    lightBlue: '#087baa',
  },
};

const lightTheme = {
  colors: {
    dark: '#ffffff',
    primary: '#1c2329',
    gray: '#eeeeee',
    secondary: '#1e3044',
    lightBlue: '#087baa',
  },
};

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap');
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Tahoma, sans-serif;
  }
  body {
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }
  .container {
    width: 90%;
    margin: auto;
  }
`;

// export function reportWebVitals(metric: any) {
//   // console.log(metric);
// }

export default ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} changeTheme={() => setDarkMode(!darkMode)} />
    </ThemeProvider>
  );
};
