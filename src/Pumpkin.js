import React, { Component } from "react";

class Pumpkin extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    const name = this.props.name;
    return (
        <div className="pumpkin-main">
          <img src={this.props.url} />
          <p>{name}</p>
        </div>
    );
  }
}

export default Pumpkin;
