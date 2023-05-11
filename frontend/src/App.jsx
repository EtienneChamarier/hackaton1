import QuestionPage from "./TestPage";
import questions from "./assets/data";
import "./App.css";

function App() {
  const promptAnswers = [];
  function handleGenerateAnswer() {
    console.info(
      `Je sohaite aller en ${promptAnswers[0]}, plutôt ${promptAnswers[1]}, pendant la période ${promptAnswers[2]}`
    );
  }

  return (
    <div className="App">
      {questions.map((question) => {
        return (
          <QuestionPage promptAnswers={promptAnswers} answers={question} />
        );
      })}
      {/* <QuestionPage promptAnswers={promptAnswers} answers={answers} />
      <QuestionPage promptAnswers={promptAnswers} answers={answers2} /> */}
      <button type="button" onClick={handleGenerateAnswer}>
        TEST
      </button>
    </div>
  );
}

export default App;
