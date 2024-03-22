import React, { Component } from "react";
const { API_KEY } = require("./config.json");

class OMDbapi extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    console.log(API_KEY);
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
    return <div></div>;
  }
}

export default OMDbapi;
