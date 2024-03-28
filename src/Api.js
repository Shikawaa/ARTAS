import React, { Component } from "react";
const { API_KEY } = require("./config.json");

class OmdbAPI extends Component {
  state = {
    movieData: [],
  };
  componentDidMount() {
    console.log(API_KEY);
    let url = "https://www.omdbapi.com/?i=tt3846798&apikey=1316e5ed" + API_KEY;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          movieData: result,
        });
      });
  }
  render() {
    return <div></div>;
  }
}

export default OmdbAPI;
