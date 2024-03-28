import React, { Component } from "react";
import MovieSelector from "./RandomMovie";

const { API_KEY } = require("./config.json");

const Ratings = (props) => {
  const allRatings = props.movieData.Ratings?.map((movie, index) => {
    return (
      <div key={index}>
        <h1>{movie.Source}</h1>
        <h2>{movie.Value}</h2>
      </div>
    );
  });

  return <div>{allRatings}</div>;
};

console.log("Test" + MovieSelector);
class OmdbApi extends Component {
  state = {
    movieData: MovieSelector,
    indiceDirector: false,
    indiceRatings: false,
    indiceGenre: false,
    indiceActors: false,
    indiceRuntime: false,
    indiceAwards: false,
  };

  showIndiceDirector = () => {
    this.setState({
      indiceDirector: true,
    });
  };

  showIndiceRatings = () => {
    this.setState({
      indiceRatings: true,
    });
  };

  showIndiceGenre = () => {
    this.setState({
      indiceGenre: true,
    });
  };

  showIndiceActors = () => {
    this.setState({
      indiceActors: true,
    });
  };

  showIndiceRuntime = () => {
    this.setState({
      indiceRuntime: true,
    });
  };

  showIndiceAwards = () => {
    this.setState({
      indiceAwards: true,
    });
  };

  render() {
    const {
      movieData,
      indiceDirector,
      indiceActors,
      indiceAwards,
      indiceGenre,
      indiceRatings,
      indiceRuntime,
    } = this.state;

    let indiceDirectorText;
    if (indiceDirector) {
      indiceDirectorText = (
        <div>Ce film a été réalisé par {movieData.Director}</div>
      );
    } else {
      indiceDirectorText = <div>Cet indice est caché</div>;
    }

    let indiceActorsText;
    if (indiceActors) {
      indiceActorsText = <div> {movieData.Actors} jouent dans ce film</div>;
    } else {
      indiceActorsText = <div>Cet indice est caché</div>;
    }

    let indiceAwardsText;
    if (indiceAwards) {
      indiceAwardsText = <div>Ce film a gagné {movieData.Awards}</div>;
    } else {
      indiceAwardsText = <div>Cet indice est caché</div>;
    }

    let indiceGenreText;
    if (indiceGenre) {
      indiceGenreText = <div>Ce film est du genre {movieData.Genre}</div>;
    } else {
      indiceGenreText = <div>Cet indice est caché</div>;
    }

    let indiceRatingsText;
    if (indiceRatings) {
      indiceRatingsText = (
        <div>Ce film est noté {movieData.Metascore} sur Metascore</div>
      );
    } else {
      indiceRatingsText = <div>Cet indice est caché</div>;
    }

    let indiceRuntimeText;
    if (indiceRuntime) {
      indiceRuntimeText = <div>Ce film dure {movieData.Runtime}</div>;
    } else {
      indiceRuntimeText = <div>Cet indice est caché</div>;
    }

    return (
      <div className="OmdbAPI">
        <h1>Essaye de trouver le film avec ces indices :</h1>

        <body>Ce film est sorti le {movieData.Released}</body>

        {indiceDirectorText}
        <button onClick={this.showIndiceDirector}>Afficher indice 1</button>

        {indiceActorsText}
        <button onClick={this.showIndiceActors}>Afficher indice 2</button>

        {indiceAwardsText}
        <button onClick={this.showIndiceAwards}>Afficher indice 3</button>

        {indiceGenreText}
        <button onClick={this.showIndiceGenre}>Afficher indice 4</button>

        {indiceRatingsText}
        <button onClick={this.showIndiceRatings}>Afficher indice 5</button>

        {indiceRuntimeText}
        <button onClick={this.showIndiceRuntime}>Afficher indice 6</button>
      </div>
    );
  }
}

export default OmdbApi;
