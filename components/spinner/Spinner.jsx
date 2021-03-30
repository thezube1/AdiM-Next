import React, { Component } from "react";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <div
        className="spinnerWrapper"
        style={{
          opacity: this.props.isOpen === false ? 0 : 1,
          visibility: this.props.isOpen === false ? "hidden" : "visible",
          transition: "visibility .5s, opacity .5s",
        }}
      >
        <div className="spinner"></div>
      </div>
    );
  }
}

export default Spinner;
