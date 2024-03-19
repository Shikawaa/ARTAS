import React, { Component } from "react";
import Submit from "./Submit";

class Quiz extends Component {
  render() {
    return (
      <div>
        <h1>Le fameux quiz de film !</h1>
        <p>Êtes-vous prêt ?</p>
        <Submit />
        <label for="film-select">Choose your type of movie</label>
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="sci-fi">Science Fiction</option>
          <option value="fantasy">Fantasy</option>
          <option value="historic">Historic</option>
          <option value="horror">Horror</option>
        </select>
      </div>
    );
  }
}

export default Quiz;
