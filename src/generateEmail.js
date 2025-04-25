import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDyO3RcVB1iXrGt16uIoZ0hDWiSbHbsXp4");

export async function generateEmail(
  userPrompt,
  username,
  tone = "professional"
) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const toneInstructions = {
    formal:
      "Use formal language, maintain professional distance, and be extra courteous.",
    friendly:
      "Be warm and approachable, use casual but polite language, and show enthusiasm.",
    cheerful:
      "Be upbeat and positive, use encouraging language, and express joy.",
    assertive:
      "Be confident and direct, use clear language, and be straightforward.",
    empathetic:
      "Show understanding and compassion, be supportive, and acknowledge feelings.",
    professional:
      "Be polite and business-appropriate, maintain a balanced tone.",
  };

  const fullPrompt = `
  You are an AI email writer. Generate a ${tone} email based on the given input.
  
  Tone Instructions: ${toneInstructions[tone]}
  
  Keep it natural and relevant. 
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

export const emailTones = [
  {
    id: "formal",
    name: "Formal",
    description: "Perfect for official communications and business proposals",
    color: "blue",
  },
  {
    id: "friendly",
    name: "Friendly",
    description: "Great for team communication and casual business",
    color: "green",
  },
  {
    id: "cheerful",
    name: "Cheerful",
    description: "Ideal for congratulations and positive messages",
    color: "yellow",
  },
  {
    id: "assertive",
    name: "Assertive",
    description: "Best for follow-ups and important requests",
    color: "purple",
  },
  {
    id: "empathetic",
    name: "Empathetic",
    description: "Suitable for sensitive situations and support",
    color: "pink",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Standard business tone for general use",
    color: "gray",
  },
];
