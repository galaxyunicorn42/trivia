import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var currentQuestionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question text="How many planets are there? " />
      <Question text="How many presidents have there been? " />
    </div>
  );
}
export function Question(props) {
  return <div>Question : {props.text}</div>;
}

export default App;
