import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Film</th>
        <th>Catégories</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.tableContent.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
        <td>
          <button onClick={() => props.removeRow(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { tableContent, removeRow } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody tableContent={tableContent} removeRow={removeRow} />
      </table>
    );
  }
}

export default Table;
