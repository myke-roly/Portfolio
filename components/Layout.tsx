import React from 'react';
import Head from 'next/head';
import Footer from 'containers/footer';
import Navbar from 'containers/navbar';

interface PropsLayout {
  title?: string
}

const Layout: React.SFC<PropsLayout> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,  width=device-width" />
        <meta name="description" content="This is my website, My name is Mike I'm front end developer " />
        <link rel="icon" href="./images/logo.svg"/>

        <title>{title}</title>
      </Head>
      <Navbar />
      { children }
      <Footer />
    </div>
  )
};


export default Layout;