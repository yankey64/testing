import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";
import MailBox from "./MailBox";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
const messages = ["React", "Re: React", "Re:Re: React"];

ReactDOM.render(
  <React.StrictMode>
    {/* <MailBox unreadMessages={messages} /> */}
    {/* <NameForm /> */}
    {/* <EssayForm /> */}
    <FlavorForm />
  </React.StrictMode>,

  document.getElementById("root")
);
