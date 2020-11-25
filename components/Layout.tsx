import Head from 'next/head';
import Footer from 'containers/footer';
import Navbar from 'containers/navbar';
import ButtonUP from 'components/ButtonScrollTop';

interface PropsLayout {
  title?: string;
}

const Layout: React.FunctionComponent<PropsLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,  width=device-width" />
        <meta name="description" content="This is my website, My name is Mike I'm Front End Developer " />
        <link rel="icon" href="./images/logo.svg" />

        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <ButtonUP />
      <Footer />
    </>
  );
};

export default Layout;
