import React, { Component } from "react";
import Quiz from "./Quiz";

class Boss extends Component {
  render() {
    const dataToPass = [
      {
        name: "Star Wars",
        type: "Sci-fi",
      },
      {
        name: "Harry Potter",
        type: "Fantasy",
      },
      {
        name: "Fast & Furious",
        type: "Action",
      },
      {
        name: "Avengers",
        type: "Action",
      },
      {
        name: "Kimi no Suizo wo Tabetai",
        type: "Anime",
      },
    ];
    return (
      <div>
        <Quiz quizTest={dataToPass} />
        <p>Liste des films</p>
      </div>
    );
  }
}

export default Boss;
