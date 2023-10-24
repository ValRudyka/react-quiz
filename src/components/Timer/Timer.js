import React, { useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext/QuizProvider";

function Timer() {
  const { dispatch, time } = useQuiz();
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    if (time === 0) {
      dispatch({ type: "finishQuiz" });
    }

    return () => clearInterval(id);
  }, [dispatch, time]);

  return (
    <p className="timer">
      {minutes < 10 ? "0" : ""}
      {minutes} : {seconds < 10 ? "0" : ""}
      {seconds}
    </p>
  );
}

export default Timer;
