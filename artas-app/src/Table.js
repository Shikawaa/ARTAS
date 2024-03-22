import React, { Component } from "react";
import "./Table.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Réponse</th>
        <th>Question</th>
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
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { tableContent } = this.props;
    return (
      <div className="Table">
        <table>
          <TableHeader />
          <TableBody tableContent={tableContent} />
        </table>
      </div>
    );
  }
}

export default Table;
