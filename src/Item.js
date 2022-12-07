import React from 'react';
import "./App.css";


export default function Item(props) {
  return (
    <div class="Item">
        <img src={props.item.image} alt=""></img>
        <div class="description">
            <h4>{props.item.name}</h4>
            <p>{props.item.description}</p>
            <button class="btn-sm" href={props.item.url}><b>View Project</b></button>
        </div>
    </div>

  )
}
