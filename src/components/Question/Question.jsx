import React, { Component, useState } from "react";
import Answer from "../Answer/Answer";
export default function Question(props) {
  return(
   <div>
    {props.text}
    <Answer choices= {props.answerChoices} />
    </div>
);
}
