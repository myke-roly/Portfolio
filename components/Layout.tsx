import React, { useState } from 'react';
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
        <meta name="description" content="This is my website, My name is Mike I'm front end developer " />
        <link rel="icon" href="./images/logo.svg"/>

        <title>{title}</title>
      </Head>
      { children }
    </div>
  )
};


export default Layout;