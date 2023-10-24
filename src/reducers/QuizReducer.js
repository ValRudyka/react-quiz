export const initialState = {
  questions: [],

  //loading, error, ready, active, finished
  status: "loading",
  questionNumber: 0,

  points: 0,
  answer: null,

  secondsRemaining: 20,
  highscore: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "receivedData":
      return { ...state, questions: action.payload, status: "ready" };

    case "failedData":
      return { ...state, status: "error" };

    case "startedQuiz":
      return { ...state, status: "active" };

    case "addAnswer":
      const question = state.questions[state.questionNumber];

      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
        answer: null,
      };

    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highscore: Math.max(state.highscore, state.points),
      };

    case "restartQuiz":
      return {
        ...initialState,
        highscore: state.highscore,
        status: "ready",
        questions: state.questions,
      };

    case "timer":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action has not been found");
  }
}
