import React, { Component } from "react";

const QuizHeader = () => {
  return (
    <thead>
      <tr>
        <th>Film</th>
        <th>Catégories</th>
      </tr>
    </thead>
  );
};

const QuizBody = (props) => {
  const rows = props.tableContent.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
        <td>{props.movie.Released}</td>
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
    const { QuizContent, removeRow, movie } = this.props;
    return (
      <Quiz>
        <QuizHeader />
        <QuizBody
          tableContent={tableContent}
          removeRow={removeRow}
          movie={movie}
        />
      </Quiz>
    );
  }
}

export default Quiz;
