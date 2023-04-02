import React from "react";
import Nav from "./Nav.js";
import Card from "./Card.js";
import data from "./data.js"
export default function App() {
    // console.log(data)
    const cards = data.map((ele)=>{
        return (<Card {...ele}/>)
    })
    return (
      <>
        <Nav />
        {cards}
      </>
    );
}