import React, { useState } from "react";
import Table from "./Table";
import AnswerInput from "./AnswerInput";
import OMDbapi from "./Api";
import Inpput from "./Quiz";

export default function FunctionalTest() {
  const [dataToPass, setDataToPass] = useState([
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
    {
      answer: "Tique",
      question: "Quand ?",
    },
  ]);

  const removeRow = (index) => [
    setDataToPass(
      dataToPass.filter((currentData, i) => {
        console.log("Deleted" + i + "(" + index + ")");
        return i !== index;
      })
    ),
  ];

  return (
    <div className="Test">
      <h1>Les différents types de feurs.</h1>
      <p>
        En cas de manque d'inspiration pour répondre à un quoi, quand, ou,
        comment ou autre question débile, n'hésitez pas à vous referer à cette
        source.
      </p>
      <Table tableContent={dataToPass} removeRow={removeRow} />
      <AnswerInput />
    </div>
  );
}
