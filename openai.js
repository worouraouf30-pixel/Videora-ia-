import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Only POST' });
  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ message: 'Missing prompt' });

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return res.status(200).json({ message: 'OPENAI_API_KEY not set. Put your OpenAI key in Vercel env OPENAI_API_KEY to enable real responses.', text: 'Demo response: set your OpenAI API key.' });
  }

  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 800
      })
    });
    const j = await r.json();
    const text = j?.choices?.[0]?.message?.content || JSON.stringify(j);
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ message: 'OpenAI request failed', error: String(e) });
  }
}
