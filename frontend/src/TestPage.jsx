/* eslint-disable react/prop-types */
import Button from "./components/Button";

export default function QuestionPage({
  answers,

  setPromptAnswers,
  navigate,
  index,
}) {
  const handleClick = (e) => {
    if (index <= 3) {
      console.info(e.target.innerText);
      setPromptAnswers((prevState) => [...prevState, e.target.innerText]);
      navigate(`/${index + 1}`);
    } else {
      setPromptAnswers((prevState) => [...prevState, e.target.innerText]);
      navigate("/your-next-destination");
    }
  };
  return (
    <div className="questionPage">
      <h2>{answers[0]}</h2>
      <div className="answers">
        {answers.map((answer, i) =>
          i > 0 ? <Button answer={answer} handleClick={handleClick} /> : ""
        )}
      </div>
    </div>
  );
}
