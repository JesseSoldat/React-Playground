import React, { Component } from "react";

class Toggle extends Component {
  state = { on: false };

  toggle = () => {
    console.log("Clicked Toggle", this.state.on);

    this.setState({ on: this.state.on ? false : true });
  };

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default Toggle;
