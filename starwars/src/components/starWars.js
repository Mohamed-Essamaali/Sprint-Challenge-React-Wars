import React from 'react';


const StarWars = (props)=>{

console.log("props" ,props)

    return(
        <div className= "starWars_container">
        <p>{props.results.name}</p>
        <p>{props.results.height}</p>
        <p>{props.results.mass}</p>
        <p>{props.results.hair_color}</p>
        <p>{props.results.skin_color}</p>
        <p>{props.results.eye_color}</p>
        <p>{props.results.birth_year}</p>
        <p>{props.results.gender}</p>
        
       

        </div>

    )

}
export default StarWars;