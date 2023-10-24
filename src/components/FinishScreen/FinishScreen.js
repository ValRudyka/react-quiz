import React from "react";
import { useQuiz } from "../../contexts/QuizContext/QuizProvider";

function FinishScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();

  const percentage = Math.ceil((points / maxPoints) * 100);

  return (
    <>
      <p className="result">
        You scored {points} out of {maxPoints} <span>({percentage}%)</span>
      </p>
      <p className="highscore">(Your highscore is {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
