import React from "react";
import styled from "styled-components";

import Card from '../components/card';

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-gap: 5px 1em;

`;

const Status = styled.h4`
    text-align: center;
    font-size: 12px;
    color: #616161;
    padding: 3px;
    font-family: roboto;
    font-style: italic;
    margin-bottom: 1em;
`;

export default ({ data }) => (
            <div>
                <CardGrid>
                    {data.allMarkdownRemark.edges.map(({ node })=>(
                        <Card key={node.id} to={node.fields.slug} node={node} />
                    ))}
                </CardGrid>
                <Status>Updated 17.4.2018 / More content coming soon..</Status>
            </div>
        
    
);


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (filter: {frontmatter: {ongoing: {eq: false}}} sort: { fields: [frontmatter___date], order: DESC }){
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

/*
post count toteutus:
<PostCount> {data.allMarkdownRemark.totalCount } posts </PostCount >
*/