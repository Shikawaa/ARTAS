import React, { Component } from "react";
import MovieSelector from "./RandomMovie";

class Test extends Component {
  state = {
    dataToPass: [
      {
        name: "Hey",
        type: "I'm here",
      },
      {
        name: "Because",
        type: "These Data",
      },
      {
        name: "Where passed",
        type: "From my parent",
      },
    ],
  };

  removeRow = (index) => {
    const { dataToPass } = this.state;

    this.setState({
      dataToPass: dataToPass.filter((currentData, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (currentRow) => {
    this.setState({ dataToPass: [...this.state.dataToPass, currentRow] });
  };

  render() {
    const { dataToPass } = this.state;

    return (
      <div className="Test">
        <h1>Saucisse</h1>
        <Table tableContent={dataToPass} removeRow={this.removeRow} />
        <Form handleSubmit={this.handleSubmit} />
        <MovieSelector />
      </div>
    );
  }
}

export default Test;
