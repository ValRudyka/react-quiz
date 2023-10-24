import React, { createContext, useContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "../../reducers/QuizReducer";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    answer,
    highscore,
    status,
    secondsRemaining: time,
    points,
    questions,
    questionNumber: index,
  } = state;

  const totalQuestions = questions.length;

  const maxPoints = questions.reduce(
    (sum, question) => sum + question.points,
    0
  );

  const value = {
    answer,
    highscore,
    status,
    points,
    questions,
    time,
    index,
    dispatch,
    totalQuestions,
    maxPoints,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "receivedData", payload: data });
      } catch (error) {
        dispatch({ type: "failedData" });
      }
    }

    fetchData();
  }, []);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export const useQuiz = function () {
  const context = useContext(QuizContext);

  if (context === undefined) {
    throw new Error(
      "The context has been used outside of the QuizContext provider"
    );
  }

  return context;
};
