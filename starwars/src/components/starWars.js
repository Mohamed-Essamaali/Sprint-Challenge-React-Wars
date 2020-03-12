import React from 'react';


const StarWars = (props)=>{

console.log("props" ,props)

    return(
        <div className= "container">
            
        <p className = "container-items">{props.results.name}</p>
        <p className = "container-items">{props.results.height}</p>
        <p className = "container-items">{props.results.mass}</p>  
        <p className = "container-items">{props.results.birth_year}</p>
        <p className = "container-items">{props.results.gender}</p>
        
       

        </div>

    )

}
export default StarWars;