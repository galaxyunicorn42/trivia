import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question/Question";
function App() {
  var questionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question 
      text={data[questionNumber]["question"]["text"]} 
      answerChoices={data[questionNumber]["question"]["choices"]} 
      />
      <NextQuestion />
    </div>
  );
}

function NextQuestion() {
  return <button>Next Question</button>;
}

function Answer(props) {
  return <div>{props.answerChoices}</div>;
}
export default App;
