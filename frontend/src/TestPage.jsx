/* eslint-disable react/prop-types */
import Button from "./components/Button";

export default function QuestionPage({ answers, promptAnswers }) {
  const handleClick = (e) => {
    console.info(e.target.innerText);
    promptAnswers.push(e.target.innerText);
  };
  return (
    <div className="question">
      <h2>{answers[0]}</h2>
      <div className="answers">
        {answers.map((answer, index) =>
          index > 0 ? <Button answer={answer} handleClick={handleClick} /> : ""
        )}
      </div>
    </div>
  );
}
