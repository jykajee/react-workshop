import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
    border: 1px solid #FF8A80;
    padding: 40px;
    max-width: 70%;
    `;

const Image = styled.img`
    max-width: 95%;
    `;

export default class Card extends React.Component {

    render() {
        return (
            <CardWrapper>
            <div>
                <h1>{this.props.title}</h1>
                
                    <Image src={this.props.imageUrl}  /> 
                   
            </div>
            </CardWrapper>
        )
        }
    }
