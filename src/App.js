import React from "react";
import Nav from "./Nav.js";
import Card from "./Card.js";
import data from "./data.js"
export default function App() {
    // console.log(data)
    return (
      <>
        <Nav />
        <Card {...data[0]} />
        <Card {...data[1]} />
        <Card {...data[2]} />
      </>
    );
}