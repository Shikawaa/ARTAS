import React, { Component } from "react";
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
        <h1>Ce film est sorti le : {movieData.Released}</h1>
        <p>Title: {movieData.Title}</p>
        <p>Release Date: {movieData.Year}</p>
        <p>
          Poster: <img src={movieData.Poster} />
        </p>
        <Ratings movieData={movieData} />
      </div>
    );
  }
}

export default OmdbApi;
