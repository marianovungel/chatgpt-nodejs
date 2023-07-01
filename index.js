require("dotenv").config()
const express = require('express')
const cors = require('cors')
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.GPTPESSEWORD,
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

const Port = process.env.PORT
app.listen(Port, console.log({server: true}))