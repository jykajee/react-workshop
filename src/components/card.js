import React from 'react';
import styled from 'styled-components';
import Link from "gatsby-link";

const CardLink = styled(Link)`
    text-decoration: none;
    transition: 0.1s all;
    &:hover {
        transform: scale(1.02);
    }
`

const CardWrapper = styled.div`
    
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
    text-shadow: 5px 5px 5px rgba(0,0,0,0.5);
`;

const Image = styled.div`
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    height: 10rem;
    border-radius: 5px;
    z-index: 10;
    `;

const Date = styled.p`
    padding: 2px;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    color: #212121;
`
const Tag = styled.p`
    background-color: #F4511E;
    color: #FAFAFA;
    display: inline-block;
    float: right;
    border-radius: 5px;
    padding: 2px;
    padding-left: 4px;
    padding-right: 4px;
    
`
const Excerpt = styled.p`
    color: #212121;
    margin-left: 2%;
`

const MetaRow = styled.div`
    margin-top: 3%;
    margin-bottom: 2%;
    margin-right: 5%;
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
                            <Date>{node.frontmatter.date}</Date>
                        </MetaRow>
                        <Excerpt>{node.excerpt}</Excerpt>
                    </div>
                </CardWrapper>
            </CardLink>
        )
    
}

export default Card;