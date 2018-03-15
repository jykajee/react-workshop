import React from "react";
import styled from "styled-components";

import Card from '../components/Card';

export default class Index extends React.Component {

    render () {
        return(
            <div>
            <Card title="Purrfect" imageUrl="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw==" />
            <Card title="Anotha" imageUrl="https://images.petsmartassets.com/is/image/PetSmart/BR_VDFEAT-Authority-DOG-20160818?$PB0802$" />
            </div>
        )
}
}
