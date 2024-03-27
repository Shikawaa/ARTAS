import React, { Component } from "react";
import "./Table.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Question</th>
        <th>Réponse</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.tableContent.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.question}</td>
        <td>{row.answer}</td>
        <td>
          <button onClick={() => props.removeRow(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default function TableFunction(props) {
  return (
    <div className="Table">
      <table>
        <TableHeader />
        <TableBody
          tableContent={props.tableContent}
          removeRow={props.removeRow}
        />
      </table>
    </div>
  );
}
