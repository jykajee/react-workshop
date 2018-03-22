import React from "react";
import Link from "gatsby-link";
import H1 from "../components/H1";
import Card from "../components/card";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10%;
`
const List = styled.ul`
  list-style-type: none;
`

const Li = styled.li`
  padding: 2%;
  margin: 3%;
  border-radius: 5px;
  background-color: #C1E3FF;
  color: #212121;
  font-size: 1.2em;
`

const ProjectsPage = () => (
  <Wrapper>
    <H1>Ongoing Projects:</H1>
      <List>
        <Li>Master's thesis on <em>gesture interface in virtual reality</em></Li>
        <Li><em>Learning React</em> with Gatsby, Graphql and Netlify</Li>
        <Li>Making Arduino flowerpot soil moisture reader</Li>
      </List>
  </Wrapper>
);

/*
const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;


`;

const PostCount = styled.h4`
    text-align: center;
    font-size: 12px;
    color: #616161;
    padding: 3px;
`;

const ProjectsPage = ({ data }) => (
  <div>
      <H1>Ongoing Projects</H1>
      <PostCount> {data.allMarkdownRemark.totalCount } posts </PostCount >
      <CardGrid>
          {data.allMarkdownRemark.edges.map(({ node })=>(
              <Card key={node.id} to={node.fields.slug} node={node} />
          ))}
      </CardGrid>
  </div>
);


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (filter: {frontmatter: {ongoing: {eq: true}}}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            thumbnailUrl
            tags
            date(formatString: "DD.M.YYYY")
          }
          fields {
            slug
           }
           excerpt
        }
      }
    }
  }
`;
*/

export default ProjectsPage;
