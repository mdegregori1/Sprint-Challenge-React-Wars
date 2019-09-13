import React from "react";
import styled from "styled-components"

const StarWarsCard = (props) =>{
    return (
        <Main>
            <Name>{props.characterName}</Name>
            <Height>Height: {props.characterHeight}</Height>
            <Weight>Mass:{props.characterMass}</Weight>

        </Main>
    )
}

export default StarWarsCard;

const Main = styled.div`
    border: 1px dotted black;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    


`;

const Name = styled.div`
  font-size: 30px;
  font-weight: bold;


`;

const Height = styled.div`
  color: #fff;
  


`;

const Weight = styled.div`
  color: #fff;
  


`;