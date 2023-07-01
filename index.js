const express = require('express')
const cors = require('cors')
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const app = express()
app.use(express.json())
app.use(cors())

app.post('/chat', async (req, res)=>{
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 1000,
        temperature: 0,
        prompt: prompt,
    })

    res.status(200).json(completion.data.choices[0].text)
})


app.listen('8000', console.log({server: true}))