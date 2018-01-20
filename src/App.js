import React, { Component } from "react";
import Photo from "./components/Photo";
import Container from "./components/Container";
import Header from "./components/Header";
import photos from "./photos.json";
import "./App.css";

class App extends Component {

  state = {
    clickedPhotos: [],
    score: 0
  };

  pictureShuffle = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  };

  clickPicture = id => {

    console.log(id);
    console.log(this.state.clickedPhotos);

    if (this.state.clickedPhotos.some(photoId => photoId === id)) {
      let score = 0;
      let clickedPhotos = [];
      this.setState({clickedPhotos, score});
      this.pictureShuffle(photos);
    } else {
      let clickedIds = this.state.clickedPhotos;
      clickedIds.push(id);
      let score = this.state.score + 1;

      this.setState({clickedIds, score});


      this.pictureShuffle(photos);

    }
  };

  render() {
     return (
      <Container>
        <Header score={this.state.score}>Art-Click</Header>
        {photos.map(photo => (
          <Photo
          clickPicture={this.clickPicture}
            id={photo.id}
            key={photo.id}
            url={photo.url}
            info={photo.info}
          />
        ))}
      </Container>
    );}
}

export default App; 
