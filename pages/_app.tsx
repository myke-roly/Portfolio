import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    dark: '#000',
    light: '#ccc'
  }
}

export function reportWebVitals(metric: any) {
  console.log(metric);
}

export default ({ Component , pageProps}: AppProps) => {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}