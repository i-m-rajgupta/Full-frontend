import { useState } from "react";
import axios from 'axios';
import DisplayJoke from "./DisplayJokes.jsx";

export default function Joke(){
  const API_URL =window.location.hostname === 'localhost'? '/api/jokes': 'https://full-backend-gamma.vercel.app/api/jokes';
    let [jokes,setJokes] = useState([]);
  function handleClicked(){
     axios.get(API_URL)
    .then((res)=>{
        console.log(res);
        setJokes(res.data);
    })
    .catch((err)=>{
        console.log("Error while fetching the data"); 
    })
  }
   return (
    <>
   {jokes && jokes.length !=0 ? <button> Total : { jokes.length} </button>: ""}
    {jokes && <DisplayJoke jokes={jokes} />}
    <button onClick={handleClicked}>Get Jokes</button>
    </>
  )
}