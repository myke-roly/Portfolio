import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import ThemeContext from '../theme/ThemeContext';
import ProjectsContext from 'state/projests/context';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans JP', sans-serif;
    transition: background .5s ease;
    transform-origin: left;
  }
  html {
    scroll-behavior: smooth;
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
    width: 70%;
    margin: 0 auto;

    @media (max-width: 720px) {
      width: 90%;
    }
  }
  button { 
    cursor: pointer;
  }
`;

// export function reportWebVitals(metric: any) {
//   // console.log(metric);
// }

export default ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext>
      <ProjectsContext>
        <GlobalStyle />
        <Component {...pageProps} />
      </ProjectsContext>
    </ThemeContext>
  );
};
