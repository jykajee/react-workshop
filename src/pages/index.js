import React from "react";
import styled from "styled-components";

import Card from '../components/card';

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-gap: 5px 1em;

`;

const PostCount = styled.h4`
    text-align: center;
    font-size: 12px;
    color: #616161;
    padding: 3px;
`;

export default ({ data }) => (
            <div>
                
                <CardGrid>
                    {data.allMarkdownRemark.edges.map(({ node })=>(
                        <Card key={node.id} to={node.fields.slug} node={node} />
                    ))}
                </CardGrid>
            </div>
        
    
);


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (filter: {frontmatter: {ongoing: {eq: false}}}){
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