import React, { Component } from "react";

const TableBody = (props) => {
  const rows = props.tableContent.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

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
class Table extends Component {
  render() {
    const { tableContent } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody tableContent={tableContent} />
      </table>
    );
  }
}

export default Table;
