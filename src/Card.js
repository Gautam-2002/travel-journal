import React from "react";
// import fuji from "./images/fuji.png";
// import lake from "./images/lake.png";
// import temple from "./images/temple.png";

export default function Card(props) {
  return (
    <>
    <div className="card">
      <img src={props.imageUrl} alt="fuji" />
      <div>
        <div>
          <small>
            <span>{props.location}</span>{" "}
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </small>
        </div>
        <h1>{props.title}</h1>
        <h5>
          {props.startDate}-{props.endDate}
        </h5>
        <p>{props.description}</p>
      </div>
    </div>
    <hr width="63%"></hr>
    </>
  );
}
