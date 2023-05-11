const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
//   apiKey: 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 // Idéalement, vous aurez mis votre clé api dans l'env
})
const openai = new OpenAIApi(configuration)

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "Peux-tu me proposer 2 detinations, [europe / hors-Europe] durant la période [estival / hyvernal], plutôt [ville / nature] proche de la [montange / mer], je souhaiterai profiter d'activité [sportives / culturel / culinaire / reposantes]. Je ne veux pas d'introduction n'y de conclusion, le tout écris en maximum de trois lignes" }],
})