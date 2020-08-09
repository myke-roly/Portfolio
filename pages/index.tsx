import React from 'react';
import Layout from 'components/Layout';
import Header from 'containers/header';
import AboutMe from 'containers/about';
import Skills from 'containers/skills';

const Index: React.SFC = () => {
  return (
    <Layout title="Mike_">
      <Header />
      <AboutMe />
      <Skills />
    </Layout>
  );
};

export default Index;