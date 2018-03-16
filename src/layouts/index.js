import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { injectGlobal } from "styled-components";
import Header from "../components/Header";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    border-top: 5px solid #e74c3c;
    background: #f5f1f0;
  }
`;

const Container = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  padding: 0 1rem 1rem 1rem;
  position: relative;
`;

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={"Jyri Mäkinen"}
      meta={[
        { name: "description", /* content: data.site.siteMetadata.description */ },
        { name: "keywords", /* content: data.site.siteMetadata.keywords */ }
      ]}
    />
    <Header title={"Portfolio" /*data.site.siteMetadata.title*/ } />

    {children()}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;
