import { useQuiz } from "../../contexts/QuizContext/QuizProvider";

function ButtonNext() {
  const { dispatch, index, numQuestions } = useQuiz();

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({
          type: `${index !== numQuestions - 1 ? "nextQuestion" : "finishQuiz"}`,
        })
      }
    >
      Next
    </button>
  );
}

export default ButtonNext;
