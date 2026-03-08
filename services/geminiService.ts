
import { GoogleGenAI } from "@google/genai";
import { resumeData } from "../data/resumeData";

const API_KEY = process.env.API_KEY || "";

export async function getChatResponse(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  if (!API_KEY) {
    return "I'm currently offline (API Key missing). Please contact Jinduo Li directly via LinkedIn!";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  const systemInstruction = `
    You are the official AI Assistant for ${resumeData.name}.
    Your goal is to answer recruiter and visitor questions professionally and concisely.
    
    RULES:
    1. Respond in the first person (e.g., "I'm currently studying at ASU...", "My experience includes...").
    2. Answer ONLY using the provided knowledge base: ${JSON.stringify(resumeData)}.
    3. If information is not in the knowledge base, say: "That information is not listed in my portfolio, but I'd be happy to discuss it further."
    4. Do NOT use the name Summer; refer to the candidate only as Jinduo or Jinduo Li.
    5. Do NOT fabricate experience or skills.
    6. Be professional, helpful, and concise.
    
    CONTEXT:
    Name: ${resumeData.name}
    Education: Senior CS student at Arizona State University (Graduation: May 2026).
    Current Role: Full Stack Developer at Atoms Tech.
    Technical Focus: AI/ML (LLMs, RAG, CV), Web Apps (.NET, Python, React), Cloud/DevOps (GCP, Docker, K8s).
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: h.parts })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Could you try rephrasing?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `I encountered a technical glitch. Please reach out to ${resumeData.name} via email at ${resumeData.email}!`;
  }
}
