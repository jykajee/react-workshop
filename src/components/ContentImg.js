import React from 'react';
import styled from 'styled-components';

const ContentImage = styled.img`
    
    margin-bottom: 1%;
    width: 100%;

    &:last-of-type {
    margin-bottom: 0;
  }

`
const Wrapper = styled.div`
    margin-top: 1%;
    margin-bottom: 4%;
`


const ContentImg = (props) => {
    var str = String(props.urls);
    console.log("ennen splittiä: " + str);
    var contentImgUrls = str.split(","); 
    console.log("splitin jälkeen: " + contentImgUrls);

    const contentImgs = contentImgUrls.map((imgUrl) =>
        <ContentImage src ={imgUrl} alt="Example image of my work" />
    );

    return (
        <Wrapper>
            {contentImgs}
        </Wrapper>
    )
}

export default ContentImg;
