import { GoogleGenAI } from "@google/genai";

export const myPrompt = async (s) => {

    const ai = new GoogleGenAI({
        apiKey : import.meta.env.VITE_APP_API_KEY
    });

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: s,
    });

    return response.text + "";
}