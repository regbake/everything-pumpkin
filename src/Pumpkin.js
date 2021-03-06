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
          <figure>
              <img src={this.props.url} />
              <p>{name + "   "}
              <button type="button" className="btn btn-warning glyphicon glyphicon-shopping-cart pumpkin-button" >$24.99</button>
              </p>

            <figcaption>
              <p>{this.props.description}</p>
              <p><a href="#">Read More</a></p>
            </figcaption>
          </figure>
          </div>
        </div>

    );
  }
}

export default Pumpkin;
