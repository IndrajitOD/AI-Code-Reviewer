import analyzeCode from "../services/codeAnalyzer.js";

export const submitCodeForReview = async (req, res) => {
    const { code, language } = req.body;

    if (!code) {
        return res.status(400).json({ error: "No code provided. Please submit code to review." });
    }

    const feedback = await analyzeCode(code, language || "javascript");
    res.send(feedback);
};
