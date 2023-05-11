export default function QuestionPage() {
  const handleClick = (e) => {
    console.info(e.target.innerText);
  };
  return (
    <div className="question">
      <h2>
        Question 1 : <br /> Où voulez vous aller ?
      </h2>
      <div className="answers">
        <button type="button" onClick={handleClick}>
          Europe
        </button>
        <button type="button" onClick={handleClick}>
          Amérique
        </button>
        <button type="button" onClick={handleClick}>
          Asie
        </button>
      </div>
    </div>
  );
}
