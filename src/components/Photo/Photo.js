import React from "react";
import "./Photo.css";

const Photo = props => (
  <div className="responsive-img border float-left p-3 m-2">
      <img key={props.id} src={props.url} alt={props.info} onClick={() => props.clickPicture(props.id)}/>
      </div>
);

export default Photo;