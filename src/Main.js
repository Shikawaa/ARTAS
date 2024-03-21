import React, { Component } from "react";
import Quiz from "./Quiz";

class Main extends Component {
  state = {
    dataToPass: [
      {
        movie: "Star Wars 1",
        type: "Sci-fi",
        releaseDate: "1999",
        director: "Georges Lucas",
      },
      {
        movie: "Harry Potter 1",
        type: "Fantasy",
        releaseDate: "2001",
        director: "Chris Columbus",
      },
      {
        movie: "Fast and Furious",
        type: "Action",
        releaseDate: "2001",
        director: "Rob Cohen",
      },
      {
        movie: "Avengers",
        type: "Action",
        releaseDate: "2012",
        director: "Joss Whedon",
      },
      {
        movie: "Koe no katachi",
        type: "Anime",
        releaseDate: "2016",
        director: "Naoko Yamada",
      },
      {
        movie: "LOTR 1",
        type: "Fantasy",
        releaseDate: "2001",
        director: "Peter Jackson",
      },
    ],
  };
  removeRow = (index) => {
    const { dataToPass } = this.state;

    this.setState({
      dataToPass: dataToPass.filter((currentData, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    const { dataToPass } = this.state;
    return (
      <div>
        <Quiz quizTest={dataToPass} removeRow={this.removeRow} />
        <p>Fin de la liste</p>
      </div>
    );
  }
}

export default Main;
