import React, { Component, useState } from "react";

  function Answer (props){
  const {choices} = props;
  return (<div>
    {choices.map((choice) => <div> {choice} </div>)}
</div>)
};
export default Answer;