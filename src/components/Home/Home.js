import React, { useState } from "react";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import Header from "./Header";
import questions from "../Questions/questions";
import Card from "../UI/Card/Card";
import Question from "../QuestionCard/Question";

const Home = (props) => {
  const [showTest, setShowTest] = useState(false);

  const startTest = () => {
    setShowTest(true);
  };

  return (
    <Card className={classes.home}>
      <Header />
      {showTest && <Question questions={questions}/>}
      {
        !showTest && <div style={{textAlign: 'center'}}>
          <h1>Own Page of Hacaga</h1>
          <Button type="button" onClick={startTest}>
            Start Test
          </Button>
        </div>
      }
    </Card>
  );
};

export default Home;
