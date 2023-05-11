/* eslint-disable react/prop-types */
import Button from "./components/Button";

export default function QuestionPage({
  answers,

  setPromptAnswers,
  pageVisible,
  setPageVisible,
  index,
}) {
  const handleClick = (e) => {
    if (index <= 3) {
      console.info(e.target.innerText);
      setPromptAnswers((prevState) => [...prevState, e.target.innerText]);
      setPageVisible(index + 1);
    } else {
      setPageVisible(5);
      setPromptAnswers((prevState) => [...prevState, e.target.innerText]);
    }
  };
  return index === pageVisible ? (
    <div className="questionPage">
      <h2>{answers[0]}</h2>
      <div className="answers">
        {answers.map((answer, i) =>
          i > 0 ? <Button answer={answer} handleClick={handleClick} /> : ""
        )}
      </div>
      <div className="questionPageFooter">
        &copy; 2023 Tripotevisor LLC Tous droits réservés
      </div>
    </div>
  ) : (
    ""
  );
}
