import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="bike"/>
      <div className="card-body">
       <h5 className="card-title">{props.title}</h5>
       <p className="card-text">{props.summary}</p>
       <Link href="#" className="btn btn-primary">הצג עוד פרטים</Link>
     </div>
  </div>
  );
}
