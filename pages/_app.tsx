import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import ThemeContext from '../theme/ThemeContext';

const GlobalStyle = createGlobalStyle`
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
    <ThemeContext>
      <GlobalStyle />
      <Component {...pageProps} changeTheme={() => setDarkMode(!darkMode)} />
    </ThemeContext>
  );
};
