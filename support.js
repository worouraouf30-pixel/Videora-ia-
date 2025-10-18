export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body || {};
    console.log('Support message received:', message);
    // In production: save to Firestore or send email. Placeholder returns OK.
    return res.status(200).json({ ok:true });
  }
  res.status(405).json({ ok:false });
}
