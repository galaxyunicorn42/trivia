import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question/Question";
import NextQuestion from "./NextQuestion/NextQuestion";
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



export default App;
