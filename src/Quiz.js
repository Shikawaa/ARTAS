import React, { Component } from "react";
import OMDbApi from "./OMDbApi";

class Quiz extends Component {
  render() {
    return (
      <table>
        <OMDbApi />
      </table>
    );
  }
}

export default Quiz;
