import React, { Component } from "react";
import Submit from "./Submit";

const QuizTableHeader = (props) => {
  return (
    <thead>
      <tr>
        <th>Movie name</th>
        <th>Type</th>
        <th>Release date</th>
        <th>Director</th>
      </tr>
    </thead>
  );
};

const QuizTableBody = (props) => {
  const rows = props.quizTest.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.movie}</td>
        <td>{row.type}</td>
        <td>{row.releaseDate}</td>
        <td>{row.director}</td>
        <td>
          <button onClick={() => props.removeRow(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Quiz extends Component {
  render() {
    const { quizTest, removeRow } = this.props;
    return (
      <table>
        <QuizTableHeader />
        <QuizTableBody quizTest={quizTest} removeRow={removeRow} />
        <Submit />
      </table>
    );
  }
}

export default Quiz;
