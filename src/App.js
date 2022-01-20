import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY} from './constants.js'
import { render } from "@testing-library/react";






function App() {
  const [image, setImage] = useState();
 
 useEffect(()=> {
  axios.get(`${API_KEY}`)
  .then(res =>{
    console.log(res.data)
  }).catch(err => console.log(err))
 }, [])
 
  return (
    <div className="App">
      <h1> Nasa's Photo of the Day!</h1>
      {/* <img src  /> */}
        {/* // Pass in img props and import it from image.js */}
      
    </div>
  );
}

export default App;
