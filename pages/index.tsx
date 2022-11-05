import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import Header from 'containers/header';
import AboutMe from 'containers/about';
import Skills from 'containers/skills';
import Projects from 'containers/projects';

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Mike_">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default Index;
