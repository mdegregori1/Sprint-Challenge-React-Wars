import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

// call function 

function StarWars() {

    const[cards,setCards] = useState([]);
    console.log('state', useState);

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(response => {
            console.log("Star Wars Card", response.data.results);
          const cards = response.data.results
          
           setCards(cards);
      
          })
          .catch(error => {
            console.log("The data is faulty!", error);
          });
      }, []);
      return (
          <div>
 
           {cards.map(cards=>(
                <StarWarsCard characterName={cards.name}  characterHeight={cards.height} characterMass={cards.mass}/>
           ))}
          </div>
      
        );
      }
  
  export default StarWars;
  

