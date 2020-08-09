import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import ThemeContext from '../theme/ThemeContext';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    transition: background .5s ease;
    transform-origin: left;
  }
  body {
    font-size: 16px;
    background: #1c2329;
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
  return (
    <ThemeContext>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContext>
  );
};
