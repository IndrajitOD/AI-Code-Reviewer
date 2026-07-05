import express from 'express';
import { submitCodeForReview } from '../controllers/analysis.controller.js';

const router = express.Router();

router.post("/analyze", submitCodeForReview);

export default router;
