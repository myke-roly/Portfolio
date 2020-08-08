import React from 'react';
import Layout from 'components/Layout';
import Header from 'containers/header';
import AboutMe from 'containers/about';

const Index: React.SFC = () => {
  return (
    <Layout title="Mike_">
      <Header />
      <AboutMe />
    </Layout>
  );
};

export default Index;