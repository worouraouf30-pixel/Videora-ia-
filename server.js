// Simple Express skeleton for Videora IA backend
require('dotenv').config({ path: './config/.env' });
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'videora-backend' });
});

// Placeholder: Auth endpoints (OAuth flows to be implemented)
app.get('/api/auth/providers', (req, res) => {
  res.json({ providers: ['google', 'facebook', 'tiktok', 'youtube'] });
});

// Placeholder: GPT endpoint (server-side proxy to OpenAI)
app.post('/api/gpt/generate', async (req, res) => {
  // Example body: { prompt: "...", kind: "video" }
  // Implement real call to OpenAI server-side here using process.env.OPENAI_API_KEY
  res.json({ ok: true, message: 'GPT generate endpoint (implement server-side call)' });
});

// Placeholder: Upload / publish endpoints
app.post('/api/publish', (req, res) => {
  res.json({ ok: true, message: 'Publish stub (connect to TikTok / YouTube API)' });
});

app.listen(PORT, () => {
  console.log(`Videora backend running on port ${PORT}`);
});
