import React from 'react';
import styled from 'styled-components';
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const CardLink = styled(Link)`
    text-decoration: none;
    transition: 0.1s all;
    &:hover {
        transform: scale(1.02);
    }
`

const CardWrapper = styled.div`
    position: relative;
    border-radius: 6px;
    padding: 0em;
    padding-bottom: 0em;
    max-width: 95%;
    margin-bottom: 10%;
    height: 94%;
    box-shadow: 7px 10px 5px rgba(0,0,0,0.1);
    `;

const Title = styled.h2`
    position: absolute;
    bottom: 0;
    left: 2%;
    color: #FFF3E0;
    text-shadow: 3px 2px 5px rgba(0,0,0,0.5);
`;

const Image = styled.div`
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0;
    height: 10rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    z-index: 10;
    `;

const Date = styled.p`
    padding: 2px;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    color: #757575;
`
const Tag = styled.p`
    background-color: #C1E3FF;
    color: #FAFAFA;
    display: inline;
    float: left;
    border-radius: 5px;
    padding: 2px;
    padding-left: 4px;
    padding-right: 4px;
    
`
const Excerpt = styled.p`
    color: #424242;
    margin-left: 2%;
    text-size: 4vw;
`

const MetaRow = styled.div`
    display: inline-block;
    margin-top: 3%;
    margin-bottom: 2%;
    margin-right: 5%;
    width: 100%;
`
const MetaRowBottom = MetaRow.extend`
    
    bottom: 0px;
`

const Card = ({node, to}) => {
        return (
            <CardLink to={to}>
                <CardWrapper>
                    <div>
                        
                        <Image
                            style = {{
                                backgroundImage: `url(${node.frontmatter.thumbnailUrl})`
                                }}> 
                            <Title>{node.frontmatter.title}</Title>
                        </Image>
                        <MetaRow>
                            <Tag>{node.frontmatter.tags}</Tag>
                        </MetaRow>
                        <Excerpt>{node.excerpt}</Excerpt>
                        <MetaRowBottom>
                            <Date>{node.frontmatter.date}</Date>
                        </MetaRowBottom>
                    </div>
                </CardWrapper>
            </CardLink>
        )
    
}

export default Card;