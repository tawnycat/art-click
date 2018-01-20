import React from "react";
import "./Header.css";

const Header = props => <div className="d-flex justify-content-around align-items-center jumbotron m-3"><h1>{props.children}</h1><p>Your current score: {props.score}</p></div>;

export default Header;