import React from "react";
import "./Header.css";

const Header = props => <h1>{props.children} {props.score}</h1>;

export default Header;