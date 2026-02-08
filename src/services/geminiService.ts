
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_INSTRUCTION } from "../constants";

export interface ChatResponse {
  text: string;
  sources?: Array<{ title: string; uri: string }>;
}

export class GeminiService {
  // Obtain API client using process.env.API_KEY directly for each request
  private getClient() {
    return new GoogleGenerativeAI(process.env.API_KEY!);
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const ai = this.getClient();
      // Using gemini-1.5-pro as the model for complex legal/administrative reasoning
      const model = ai.getGenerativeModel({ model: "gemini-1.5-pro" });
      const response = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
        systemInstruction: SYSTEM_INSTRUCTION,
      });

      // Extract text from the response
      const text = response.response.text() || "Désolé, je n'ai pas pu générer de réponse.";
      
      // Extract grounding sources from search results to provide citations as required
      const groundingChunks = response.response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const sources = groundingChunks?.map((chunk: any) => ({
        title: chunk.web?.title || "Source officielle",
        uri: chunk.web?.uri
      })).filter((s: any) => s.uri);

      return { text, sources };
    } catch (error) {
      console.error("Gemini API Error:", error);
      return { text: "Une erreur est survenue. Veuillez vérifier votre connexion ou réessayer plus tard." };
    }
  }
}

export const geminiService = new GeminiService();
