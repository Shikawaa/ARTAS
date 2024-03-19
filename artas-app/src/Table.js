import React, { Component } from "react";
import "./Table.css";

const TableHeader = () => {
  <thead>
    <tr>
      <th>Réponse</th>
      <th>Question</th>
    </tr>
  </thead>;
};

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <table>
          <TableHeader />
          <tbody>
            <tr>
              <td>feur</td>
              <td>Quoi ?</td>
            </tr>
            <tr>
              <td>coubeh</td>
              <td>Quoi ?</td>
            </tr>
            <tr>
              <td>ganda</td>
              <td>Ou ?</td>
            </tr>
            <tr>
              <td>dant de bord</td>
              <td>Comment ?</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
