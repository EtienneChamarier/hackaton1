/* eslint-disable react/prop-types */
export default function AnswerPage({ promptAnswers, handleRestartClick }) {
  return (
    <div className="destinationPage">
      <h2>Rien que pour vous !!</h2>
      <p>{`Peux-tu me proposer 2 destinations, ${promptAnswers[0]} durant la période ${promptAnswers[1]}, plutôt ${promptAnswers[2]} proche de la ${promptAnswers[3]}, je souhaiterai profiter d'activité ${promptAnswers[4]}. Je ne veux pas d'introduction n'y de conclusion, le tout écris en maximum de trois lignes`}</p>
      <button type="button" onClick={() => handleRestartClick()}>
        RECOMMENCER
      </button>
      <div className="questionPageFooter">
        &copy; 2023 Tripotevisor LLC Tous droits réservés
      </div>
    </div>
  );
}
