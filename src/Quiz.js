import React, { Component } from "react";
import Submit from "./Submit";

const QuizTableHeader = (props) => {
  return (
    <div>
      <h3>Le fameux quiz de film !</h3>
      <p>Êtes-vous prêt ?</p>
      <Submit />
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Release date</th>
        </tr>
      </thead>
    </div>
  );
};

const QuizTableBody = (props) => {
  const rows = props.quizTest.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Quiz extends Component {
  render() {
    const { quizTest } = this.props;
    return (
      <div>
        <QuizTableBody quizTest={quizTest} />
      </div>
    );
  }
}

export default Quiz;
