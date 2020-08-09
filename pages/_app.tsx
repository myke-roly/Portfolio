import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import ThemeContext from '../theme/ThemeContext';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
    --secondary: ${({ theme }) => theme.colors.dark};
    --lightBlue: ${({ theme }) => theme.colors.lightBlue};
    --gray: ${({ theme }) => theme.colors.gray};
    --third: ${({ theme }) => theme.colors.third};
  }
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
    background: var(--secondary);
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
