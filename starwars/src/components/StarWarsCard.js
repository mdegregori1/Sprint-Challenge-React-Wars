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

// styling 
const Main = styled.div`
    border: 2px solid black;
    font-size: 20px;
    margin: 2% 40% 2% 40%;
    padding-top: 50px;
    padding-bottom: 50px;
    color: #fff;

    


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