import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Loader from "./components/Loader/Loader.js";
import Error from "./components/Error/Error.js";
import StartScreen from "./components/StartScreen/StartScreen.js";
import Question from "./components/Question/Question.js";
import ButtonNext from "./components/ButtonNext/ButtonNext.js";
import Progress from "./components/Progress/Progress.js";
import FinishScreen from "./components/FinishScreen/FinishScreen.js";
import Timer from "./components/Timer/Timer.js";
import { useQuiz } from "./contexts/QuizContext/QuizProvider.js";

function App() {
  const { status, answer } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <footer>
              <Timer />
              {answer !== null ? <ButtonNext /> : null}
            </footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
