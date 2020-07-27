import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from 'hooks';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  const { companyName, companyUrl, authorName, authorUrl, siteDescription } = useSiteMetadata();

  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container type="content">
        <h1></h1>

        <h2>{  }</h2>
        <p>{  }</p>
        <p>
          <a href={companyUrl}></a>
        </p>

        <h2></h2>
        <p>
          <a href={authorUrl}>{}</a>
        </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
