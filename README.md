# Videora IA — Final scaffold (English default)

This project is a deploy-ready Next.js scaffold for "Videora IA" with:
- Chat interface calling OpenAI (serverless API route).
- Voice input / output placeholders.
- Firebase Auth placeholders (Google + Email).
- Upload page for clips (uses Firebase Storage — placeholder).
- Help & Support (messages saved via API to Firestore placeholder).
- Admin panel (prototype) and Settings where you can store API keys locally for testing.
- AdSense / AdMob ad slot placeholders ready to receive your publisher ID.

IMPORTANT (what you must do after download):
1. Replace Firebase config placeholders in `firebaseConfig.js` or set the equivalent
   environment variables in Vercel (recommended).
2. Add your OpenAI API key to Vercel as `OPENAI_API_KEY` (server-side) to enable real AI responses.
   - Locally, you can set it in a `.env.local` file as `OPENAI_API_KEY=sk-...` (do NOT commit keys).
3. Add your AdSense publisher ID in Vercel as `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXX`.
   Or, open Settings page in the app and paste your AdSense key for testing (stores in localStorage).
4. For production support messages / uploads and admin, configure Firebase (Firestore + Storage)
   and add the Firebase config to `firebaseConfig.js` or env vars.

Quick deploy:
- npm install
- npm run build
- Push to GitHub and connect to Vercel
- Set environment variables on Vercel (OPENAI_API_KEY, NEXT_PUBLIC_ADSENSE_CLIENT, FIREBASE_*)
- Deploy and test.

Notes about AdSense:
- To receive payments, Google AdSense usually requires account verification which may include
  providing payment details. You can still configure ad slots and test with sample IDs.

Enjoy. If you want, I can now stitch the repo directly into your GitHub (I will provide git commands).
