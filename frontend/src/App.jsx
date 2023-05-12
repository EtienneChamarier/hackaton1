/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuestionPage from "./TestPage";
import questions from "./assets/data";
import AnswerPage from "./pages/Answer";
import Mentions from "./pages/Mentions";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";
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
        <Routes>
          <Route path="/" element={<Home setPageVisible={setPageVisible} />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
    </div>
  );
}

export default App;
