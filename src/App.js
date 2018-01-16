import React, { Component } from "react";
import Photo from "./components/Photo";
import Container from "./components/Container";
import Header from "./components/Header";
import photos from "./photos.json";
import "./App.css";

class App extends Component {

  render() {
     return (
      <Container>
        <Header>Art-Click</Header>
        {photos.map(photo => (
          <Photo
            key={photo.id}
            url={photo.url}
            info={photo.info}
          />
        ))}
      </Container>
    );}
}

export default App;
