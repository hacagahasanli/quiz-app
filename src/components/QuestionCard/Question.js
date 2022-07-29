import { green } from "@mui/material/colors";
import React, { useState } from "react";
//import ChildQuestion from "./ChildQuestion";
import "./Question.css";

const Question = (props) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
      setShowScore(true);
    }
  };

  // const onScore = (score2) => {
  //   console.log(score2);
  //   setScore(score2);
  //   setShowScore(true);
  // };

  return (
    <>
      {showScore ? (
        <div className="scoreDiv">
          <h1>
            Sizin scorunuz <span style={{ color: "green" }}>{score}</span>
          </h1>
          <p>Eslinde siz sadece bir aptalsiniz!</p>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Question;
