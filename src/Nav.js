import React from "react";
import world from "./images/world.png"
export default function Nav() {
    return(
        <nav>
            <img src={world} alt="dunia.." className="nav-img"/>
            <h2>my travel journal</h2>
        </nav>
    )
}