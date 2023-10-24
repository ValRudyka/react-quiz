import React from "react";
import { useQuiz } from "../../contexts/QuizContext/QuizProvider";

//remember how to do it
function Progress() {
  const { maxPoints, totalQuestions, index, points, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={totalQuestions} value={index + Number(answer !== null)} />

      <p>
        Question {index + 1}/{totalQuestions}
      </p>
      <p>
        {points} / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
