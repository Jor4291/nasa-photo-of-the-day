import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY } from './Constants.js'
import Images from "./Images"
import TextContent from "./TextContent"






function App() {
  
  const [data, setData] = useState({});
 
 useEffect(()=> {
  axios.get(`${API_KEY}`)
  .then(res =>{
    console.log(res.data)
    setData(res.data)
  }).catch(err => console.log(err))
 }, [])

 
 
 

  return (
    <div className="App">
      <h1> Nasa's Photo of the Day!</h1>
      
      <Images data = {data} />
      <TextContent data = {data} />
    
    </div>
  );

  }
export default App;
