import React from 'react';
import Head from 'next/head';

interface PropsLayout {
  title?: string
}

const Layout: React.FunctionComponent<PropsLayout> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,  width=device-width" />
  <title>{title}</title>
      </Head>
      { children }
    </div>
  )
};


export default Layout;