export async function getAIRecommendation(req, res, userPrompt, products){
    const API_KEY = process.env.GEMINI_API_KEY;
    const URL = `${process.env.GEMINI_API_URL}?key=${API_KEY}`
}