import React from "react";
import { useQuiz } from "../../contexts/QuizContext/QuizProvider";

function StartScreen() {
  const { totalQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{totalQuestions} questions to test your React master</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startedQuiz" })}
      >
        Let's go
      </button>
    </div>
  );
}

export default StartScreen;
