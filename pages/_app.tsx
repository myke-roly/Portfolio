import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    dark: '#000',
    light: '#ccc'
  }
}

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Tahoma, sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }
  .container {
    width: 95%;
    margin: auto;
  }
`;

// export function reportWebVitals(metric: any) {
//   // console.log(metric);
// }

export default ({ Component , pageProps}: AppProps) => {
  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
}