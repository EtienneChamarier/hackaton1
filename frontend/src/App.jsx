/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import QuestionPage from "./TestPage";
import questions from "./assets/data";
import AnswerPage from "./pages/Answer";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const [promptAnswers, setPromptAnswers] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {questions.map((question, index) => {
          return (
            <Route
              path={`/${index}`}
              element={
                <QuestionPage
                  setPromptAnswers={setPromptAnswers}
                  answers={question}
                  index={index}
                  navigate={navigate}
                />
              }
            />
          );
        })}
        <Route
          path="/your-next-destination"
          element={<AnswerPage promptAnswers={promptAnswers} />}
        />
      </Routes>

      {/* <QuestionPage promptAnswers={promptAnswers} answers={answers} />
      <QuestionPage promptAnswers={promptAnswers} answers={answers2} /> */}
    </div>
  );
}

export default App;
