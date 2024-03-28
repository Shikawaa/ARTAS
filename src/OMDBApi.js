import React, { Component } from "react";
import AnswerInput from "./AnswerInput";

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

class OmdbApi extends Component {
  state = {
    movieData: [],
    indiceDirector: false,
    indiceRatings: false,
    indiceGenre: false,
    indiceActors: false,
    indiceRuntime: false,
    indiceAwards: false,
  };

  componentDidMount() {
    let url = "http://www.omdbapi.com/?i=tt0110357&apikey=" + API_KEY;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          movieData: result,
        });
      });
  }

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

    function isCorrect(AnswerInput) {
      if (AnswerInput == movieData.Title) {
        return "Vrai";
      } else if (AnswerInput == 0) {
        return "pas d'input";
      } else {
        return "Faux";
      }
    }
    console.log(isCorrect());
    let i = 0;

    let indiceDirectorText;
    if (isCorrect == "Faux") {
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

        {indiceActorsText}

        {indiceAwardsText}

        {indiceGenreText}

        {indiceRatingsText}

        {indiceRuntimeText}
        <AnswerInput></AnswerInput>
      </div>
    );
  }
}

export default OmdbApi;
