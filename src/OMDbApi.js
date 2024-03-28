import React, { Component } from "react";
const { API_KEY } = require("./config.json");

const Ratings = (props) => {
  const allRatings = props.movieData.Ratings?.map((movie, index) => {
    return (
      <div key={index}>
        <h4>{movie.Source}</h4>
        <h2>{movie.Value}</h2>
      </div>
    );
  });

  return <div>{allRatings}</div>;
};

class OMDbApi extends Component {
  state = {
    movieData: [],
  };
  componentDidMount() {
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=" + API_KEY;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          movieData: result,
        });
      });
  }
  render() {
    const { movieData } = this.state;
    return (
      <div>
        <p>
          <h2>Poster:</h2> <img src={movieData.Poster} />
        </p>
        <p>{movieData.Title}</p>
        <p>Release Date: {movieData.Year}</p>
        <p>Genre: {movieData.Genre}</p>
        <p>Director: {movieData.Director}</p>
        <p>Actors: {movieData.Actors}</p>
        <p>Runtime: {movieData.Runtime}</p>
        <p>Awards: {movieData.Awards}</p>
        <p>Box Office: {movieData.BoxOffice}</p>
        <Ratings movieData={movieData} />
      </div>
    );
  }
}

export default OMDbApi;
