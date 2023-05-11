/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function AnswerPage({ promptAnswers }) {
  const navigate = useNavigate();
  return (
    <div className="destinationPage">
      <h1>YOUR NEXT DESTINATION</h1>
      <p>{`Peux-tu me proposer 2 destinations, ${promptAnswers[0]} durant la période ${promptAnswers[1]}, plutôt ${promptAnswers[2]} proche de la ${promptAnswers[3]}, je souhaiterai profiter d'activité ${promptAnswers[4]}. Je ne veux pas d'introduction n'y de conclusion, le tout écris en maximum de trois lignes`}</p>
      <button type="button" onClick={() => navigate("/")}>
        Recommencer
      </button>
    </div>
  );
}
