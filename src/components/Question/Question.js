import React from "react";
import { useQuiz } from "../../contexts/QuizContext/QuizProvider";

function Question() {
  const { questions, index } = useQuiz();
  const quest = questions.at(index);

  return (
    <div>
      <h4>{quest.question}</h4>
      <OptionList options={quest.options} correct={quest.correctOption} />
    </div>
  );
}

function OptionList({ options, correct }) {
  const { answer, dispatch } = useQuiz();

  const isAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={option}
          disabled={isAnswered}
          onClick={() => dispatch({ type: "addAnswer", payload: index })}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            isAnswered ? (index === correct ? "correct" : "wrong") : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
