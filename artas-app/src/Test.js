import React, { Component } from "react";
import Table from "./Table";

class Test extends Component {
  render() {
    const dataToPass = [
      {
        name: "Star Wars",
        type: "Science-Fiction",
      },
      {
        name: "Le Seigneur des Anneaux",
        type: "Fantaisie",
      },
      {
        name: "Avengers",
        type: "Action",
      },
    ];
    return (
      <div className="Test">
        <div ClassName="Test">
          <h1>Catégories de films</h1>
          <Table tableContent={dataToPass} />
        </div>
      </div>
    );
  }
}

export default Test;
