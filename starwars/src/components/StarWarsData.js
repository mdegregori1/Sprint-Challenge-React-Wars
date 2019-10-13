import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsDisplay from "./StarWarsDisplay";

function StarWarsData(){
    const [data,setData] = useState(null);

    useEffect(()=>{
        axios
            .get('https://swapi.co/api/people/')
            .then( response => {
                const newData = response.data.results;
                console.log("data structure",newData);
                setData(newData);
            })
            .catch(error => {
                console.log("error fetching data", error);
            })
    },[])
    if(data === null ){
        return (
            <h1>Loading...</h1>
        );
    }
    return(
        <div>
            {data.map(event=>(
                <StarWarsDisplay 
                name={event.name}
                height={event.height}
                mass={event.mass}
                gender={event.gender}
                />
            ))}
        </div>
    )

}

export default StarWarsData;

  

