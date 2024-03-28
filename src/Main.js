import React, { Component } from "react";
import Quiz from "./Quiz";

class Main extends Component {
  state = {
    dataToPass: [],
  };
  removeRow = (index) => {
    const { dataToPass } = this.state;

    this.setState({
      dataToPass: dataToPass.filter((currentData, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    const { dataToPass } = this.state;
    return (
      <div>
        <Quiz quizTest={dataToPass} removeRow={this.removeRow} />
      </div>
    );
  }
}

export default Main;
