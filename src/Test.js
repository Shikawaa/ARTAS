import React, { useState } from "react";
import Table from "./Table";

export default function FunctionalTest() {
  const [dataToPass, setDataToPass] = useState([
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
  ]);

  const removeRow = (index) => {
    setDataToPass(
      dataToPass.filter((currentData, i) => {
        return i !== index;
      })
    );
  };

  render() {
    const { dataToPass, indice1 } = this.state;
    let indice1Text;
    if (indice1) {
      indice1Text = <div>Ce film est réalisé par {movieData.Director}</div>;
    } else {
      indice1Text = <div>Cet indice est caché</div>;
    }
  
    return (
      <div className="Test">
        <h1>Saucisse</h1>
        {indice1Text}
        <Table tableContent={dataToPass} removeRow={this.removeRow} />
      </div>
    );
  }
};