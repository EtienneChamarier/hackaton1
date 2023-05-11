/* eslint-disable react/jsx-no-bind */
import { useState } from "react";

import Home from "./pages/Home";
import QuestionPage from "./TestPage";
import questions from "./assets/data";
import AnswerPage from "./pages/Answer";

import "./App.scss";

function App() {
  const [promptAnswers, setPromptAnswers] = useState([]);
  const [pageVisible, setPageVisible] = useState();
  function handleRestartClick() {
    setPageVisible();
    setPromptAnswers([]);
  }

  return (
    <div className="App">
      {pageVisible === undefined ? (
        <Home setPageVisible={setPageVisible} />
      ) : (
        ""
      )}
      {questions.map((question, index) => {
        return (
          <QuestionPage
            setPromptAnswers={setPromptAnswers}
            answers={question}
            index={index}
            pageVisible={pageVisible}
            setPageVisible={setPageVisible}
          />
        );
      })}

      {pageVisible === 5 ? (
        <AnswerPage
          promptAnswers={promptAnswers}
          handleRestartClick={handleRestartClick}
        />
      ) : (
        ""
      )}
      {/* <QuestionPage promptAnswers={promptAnswers} answers={answers} />
      <QuestionPage promptAnswers={promptAnswers} answers={answers2} /> */}
    </div>
  );
}

export default App;
