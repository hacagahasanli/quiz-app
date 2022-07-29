import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./Question.css";


const ChildQuestion = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (checking) => {
    if (checking === true) {
      setScore(score + 1);
      console.log(score)
    }

    const nextQuestions = currentQuestion + 1;
    if (nextQuestions < props.questions.length) {
      setCurrentQuestion(nextQuestions);
    }
    else{
      props.onScore(score);
      console.log(score)
    }
  };
  return (
    <div className="mainDiv">
      <h2>Question Number {currentQuestion + 1} !</h2>
      <h3>{props.questions[currentQuestion].question}</h3>
      <br />
      <h2>{score}</h2>
      <div className="questionDiv">
        {props.questions[currentQuestion].answers.map((temp) => (
          <button
            className="btnAdd"
            key={temp.key}
            onClick={() => handleClick(temp.auth)}
          >
            {temp.answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChildQuestion;
