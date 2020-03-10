import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import starWars from './components/starWars';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const[result,setResult] = useState([]);
useEffect(()=>{
  
    axios
    .get("https://swapi.co/api/people/")
    .then(res =>{
      console.log("success here is the response ", res.data.results);
      return setResult(res.data.results);
    })
    .catch(err=>{
      console.log("Did not work here is the error " , err)
      return err;
    })
},[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {result.map((e) =>{
        return <starWars result = {e}/>
      })}
        
      
      </div>
    </div>
  );
}

export default App;
