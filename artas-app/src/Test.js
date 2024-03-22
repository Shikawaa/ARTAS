import React, { Component } from "react";
import Table from "./Table";
import OMDbapi from "./Api";
import Inpput from "./Quiz";

class Test extends Component {
  render() {
    const dataToPass = [
      {
        answer: "Feur",
        question: "Quoi ?",
      },
      {
        answer: "Coubeh",
        question: "Quoi ?",
      },
      {
        answer: "dant de bord",
        question: "Comment ?",
      },
      {
        answer: "Ganda",
        question: "Ou ?",
      },
    ];
    return (
      <div className="Test">
        <OMDbapi />
        <h1>Les différents types de feurs.</h1>
        <p>
          En cas de manque d'inspiration pour répondre à un quoi, quand, ou,
          comment ou autre question débile, n'hésitez pas à vous referer à cette
          source.
        </p>
        <Table tableContent={dataToPass} />
      </div>
    );
  }
}

export default Test;
