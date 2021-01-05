import React from "react";

const UserGreetings = (props) => {
  return <h1>Welcome back!</h1>;
};

const GuestGreetings = (props) => {
  return <h1>Please sign in .</h1>;
};

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreetings />;
  }
  return <GuestGreetings />;
}

export default Greeting;
