import { AppProps } from 'next/app';

export function reportWebVitals(metric: any) {
  console.log(metric);
}

export default ({ Component , pageProps}: AppProps) => {
  return <Component {...pageProps} />
}