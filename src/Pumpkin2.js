import React, { Component } from "react";

class Pumpkin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = this.props.name;
    return (
      <div>
          <div className="pumpkin-main">
            <img src={this.props.url} />
            <p>{name}</p>
            <button type="button" className="btn btn-warning glyphicon glyphicon-shopping-cart">$24.99</button>
          </div>

          <figure>
            <img src={this.props.url} />
            <figcaption>
              <p>{this.props.description}</p>
              <p><a href="#">Read More</a></p>
            </figcaption>
          </figure>
        </div>

    );
  }
}

export default Pumpkin;
