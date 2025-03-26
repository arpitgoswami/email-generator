import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDyO3RcVB1iXrGt16uIoZ0hDWiSbHbsXp4");

export async function generateEmail(userPrompt, username) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const fullPrompt = `
  You are an AI email writer. Generate a professional, well-structured email based on the given input.
  Keep it natural, polite, and relevant. 
  Provide no options and the response must not contain anything else other than the email content.
  Make this email long enough to be helpful but short enough to be interesting.

  **User Input:** "${userPrompt}"

  **Email Format:** 
  - Greeting  
  - Introduction  
  - Main content based on the topic  
  - Call to action or closing statement  
  - Proper closing with a signature 

  **My Name:** "${username}" 

  Generate a fully formatted email without asking further questions.`;

  const result = await model.generateContent(fullPrompt);
  const response = await result.response;
  return response.text();
}
