import React from "react";
import styled from "styled-components";

const StarWarsDisplay = (props) => {
    return(
            <Container>
                <h2>{props.name}</h2>
                <p> Height - {props.height}</p>
                <p> Mass - {props.mass}</p>
                <p> Gender - {props.gender}</p>
            </Container>
    )
}

export default StarWarsDisplay;

const Container = styled.div`
border: 3px solid white;
color: #fff;
padding: 2%;
margin: 5% 20% 5% 20%;
`;

