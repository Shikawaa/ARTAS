import React, { useState } from "react";
import Table from "./Table";
import OmdbApi from "./OMDBApi";

export default function FunctionalTest() {
  const [dataToPass, setDataToPass] = useState([
    {
      name: "Star Wars I",
      date: "1977",
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

  return (
    <div className="Test">
      <OmdbApi />
      <h1>Catégories de films</h1>
      <Table tableContent={dataToPass} removeRow={removeRow} />
    </div>
  );
}
