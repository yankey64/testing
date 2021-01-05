import React, { Component } from "react";
import Greeting from "./Greeting";

const LogoutButton = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      Logout
    </button>
  );
};

const LoginButton = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      Login
    </button>
  );
};

export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState((state) => ({
      isLoggedIn: !state.isLoggedIn,
    }));
  }

  handleLogoutClick() {
    this.setState((state) => ({
      isLoggedIn: state.isLoggedIn,
    }));
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={() => this.handleLoginClick()} />;
    } else {
      button = <LoginButton onClick={() => this.handleLoginClick()} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
