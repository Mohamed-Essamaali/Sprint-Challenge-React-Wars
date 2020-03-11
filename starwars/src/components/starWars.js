import React from 'react';


const StarWars = (props)=>{

console.log("props" ,props)

    return(
        <div className= "starWars_container">
            
        <p>{props.results}</p>
        <p>{props.results}</p>
        <p>{props.results}</p>  
        <p>{props.results}</p>
        <p>{props.results}</p>
        
       

        </div>

    )

}
export default StarWars;