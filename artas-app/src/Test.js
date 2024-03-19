import React, { Component } from "react";
import Table from "./Table";

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
        <h1>Les différents types de feurs.</h1>
        <p>
          En cas de manque d'inspiration pour répondre à un quoi, quand, ou,
          comment ou autre question débile, n'hésitez pas à vous referer à cette
          source.
        </p>
        <Table />
      </div>
    );
  }
}

export default Test;
