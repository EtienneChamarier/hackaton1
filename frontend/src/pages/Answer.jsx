/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";

export default function AnswerPage({ promptAnswers, handleRestartClick }) {
  const [answer, setAnswer] = useState("Votre réponse dans quelques instants");
  const prompt = `Peux-tu me proposer 2 destinations, ${promptAnswers[0]} durant la période ${promptAnswers[1]}, plutôt ${promptAnswers[2]} proche de la ${promptAnswers[3]}, je souhaiterai profiter d'activité ${promptAnswers[4]}. Je ne veux pas d'introduction n'y de conclusion, le tout écris en maximum de trois lignes`;
  useEffect(() => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_MY_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      })
      .then((response) => setAnswer(response.data.choices[0].message.content));
  }, []);
  return (
    <div className="destinationPage">
      <h2>Rien que pour vous !</h2>
      <p>{answer}</p>
      <button type="button" onClick={() => handleRestartClick()}>
        RECOMMENCER
      </button>
      <div className="questionPageFooter">
        &copy; 2023 Tripotevisor LLC Tous droits réservés
      </div>
    </div>
  );
}
