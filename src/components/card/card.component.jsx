import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img alt={props.character.name} src={`https://robohash.org/${props.character.id}?size=180x180`}></img>
    <h3>{props.character.name}</h3>
    <p>{props.character.email}</p>
  </div>
);
