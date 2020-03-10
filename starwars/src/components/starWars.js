import React from 'react';


const starWars = (props)=>{



    return(
        <div className= "starWars_container">
        <p>{props.results.name}</p>
        <p>{props.results.height}</p>
        <p>{props.results.mass}</p>
        <p>{props.results.hair_color}</p>
        <p>{props.results.skin_color}</p>
        <p>{props.results.eye_color}</p>
        <p>{props.resultsbirth_year}</p>
        <p>{props.results.gender}</p>
        <p>{props.results.homeworld}</p>
       

        </div>

    )

}
export default starWars;