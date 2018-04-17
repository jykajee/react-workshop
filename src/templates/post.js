import React from "react";
import styled from "styled-components";
import ContentImg from "../components/ContentImg";
import Link from "gatsby-link";

const PostImage = styled.div`
  margin: 2rem 0 1rem 0;
  width: 100%;
  height: 20rem;
  position: relative;
  z-index: 10;
  background-size: cover;
  background-position: 50% 50%;
`;

const PostHeader = styled.h1`
  position: absolute;
  z-index: 20;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5rem;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    );
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const PostDate = styled.small`
  font-size: 12px;
`;

const PostTags = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  background: #8BCBFF;
  color: white;
  border-radius: 20px;
`;

const MainContent = styled.div`
  p {
    margin-bottom: 1rem;
    line-height: 150%;
    font-size: 18px;
  }
  h2 {
    color: #424242;
  }
`;
const BackButton = styled(Link)`
  margin-left: 35%;
  margin-bottom: 10px;
  background-color:  #8BCBFF;
  color: #212121;
  padding: 10px;
  padding-left: 10%;
  padding-right: 10%;
  border-radius: 5px;
  font-family: roboto;
  font-style: italic;
  text-decoration: none;
  box-shadow: 2px 2px #616161;
  &:hover {
        transform: scale(1.5);
        box-shadow: 3px 5px #757575;
        transition: box-shadow 0.3s ease-in-out;
    }
`;

const PageWrapper = styled.div`
    padding-bottom: 4em;
`

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <PageWrapper>
      <PostImage
        style={{
          backgroundImage: `url(${post.frontmatter.thumbnailUrl})`
        }}
      >
            <PostHeader>{post.frontmatter.title}</PostHeader>
      </PostImage>

      <PostMeta>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostTags>{post.frontmatter.tags}</PostTags>
      </PostMeta>
      <MainContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <ContentImg urls={post.frontmatter.contentImgUrls} />
      <BackButton to="/" >See other projects</BackButton>
    </PageWrapper>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnailUrl
        tags
        contentImgUrls
        date(formatString: "DD.M.YYYY")
      }
    }
  }
`;
