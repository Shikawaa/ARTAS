import React, { Component } from "react";

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

class AnswerInput extends Component {
  render() {
    return (
      <div className="AnswerInput">
        <input id="answer" type="text" name="answer"></input>
      </div>
    );
  }
}

export default AnswerInput;
