import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.handleClick}>
          {this.state.isToggleOn ? "NO" : "OFF"}
        </button>
      </div>
    );
  }
}
