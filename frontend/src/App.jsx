import QuestionPage from "./TestPage";
import questions from "./assets/data";
import "./App.css";

function App() {
  const promptAnswers = [];
  function handleGenerateAnswer() {
    console.info(
      `Peux-tu me proposer 2 destinations, ${promptAnswers[0]} durant la période ${promptAnswers[1]}, plutôt ${promptAnswers[2]} proche de la ${promptAnswers[3]}, je souhaiterai profiter d'activité ${promptAnswers[4]}. Je ne veux pas d'introduction n'y de conclusion, le tout écris en maximum de trois lignes`
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
