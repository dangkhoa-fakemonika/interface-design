import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey : import.meta.env.VITE_APP_API_KEY
});

export const myPrompt = async (s) => {

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: s,
        config: {
            systemInstruction: "You are an AI assistant of a game-news/analytical page named GameStop. Your response should only consist of a few sentences, with no formatting, and could be somewhat inviting.",
        },
    });

    return response.text + "";
}