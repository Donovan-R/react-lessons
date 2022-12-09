import React from "react";
import Question from "./Question";
import questions from "./data";

import { useState } from "react";

const Questions = ({}) => {
  const [questionID, setQuestionID] = useState(0);
  const handleClick = (id) => {
    if (id !== questionID) {
      setQuestionID(id);
    } else setQuestionID(0);
  };
  return (
    <main>
      <div className="container">
        <h3>Questions</h3>
        <section className="info">
          {questions.map((question) => (
            <Question
              key={question.id}
              {...question}
              handleClick={handleClick}
              showInfo={question.id === questionID}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Questions;
