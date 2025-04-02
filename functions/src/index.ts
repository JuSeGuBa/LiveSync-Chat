import * as functions from "firebase-functions";
// import * as express from "express";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: functions.config().openai.api_key,
});

export const chatWithAI = functions.https.onRequest(async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    res.status(400).send({ error: "Message is required" });
    return;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    });

    res.status(200).send({ response: response.choices[0].message.content });
    return;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).send({ error: "Error while interacting with OpenAI" });
    return;
  }
});
