import React, { Component } from "react";
import Table from "./Table";

class Test extends Component {
  state = {
    dataToPass: [
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
    ],
  };
  removeRow = (index) => {
    const { dataToPass } = this.state;

    this.setState({
      dataToPass: dataToPass.filter((currentData, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { dataToPass } = this.state;
    return (
      <div className="Test">
        <div ClassName="Test">
          <h1>Catégories de films</h1>
          <Table tableContent={dataToPass} removeRow={this.removeRow} />
        </div>
      </div>
    );
  }
}

export default Test;
