# Videora IA - Skeleton (ready-to-run)

This archive provides a full skeleton for **Videora IA**: frontend (Next.js), backend (Express), and mobile (Expo).
It is configured so that **after extracting** you can `cd videora-ia` and run a small set of commands to bootstrap the project.

## Quick start (development)
```bash
# 1. unzip and enter folder
cd videora-ia

# 2. install dependencies for root + all sub-projects (frontend/backend/mobile)
npm run bootstrap

# 3. start dev servers (frontend + backend concurrently)
npm run dev

# Frontend will run on http://localhost:3000 by default
# Backend will run on http://localhost:3001 by default
```

## Where to put your API keys
Edit `config/.env.example` and create a `config/.env` file with your real keys:
```
OPENAI_API_KEY=
ADSENSE_ID=
ADMOB_APP_ID=
TIKTOK_CLIENT_ID=
FACEBOOK_APP_ID=
GOOGLE_CLIENT_ID=
MONGODB_URI=
JWT_SECRET=
```

## Deploy
- Frontend: Vercel (connect your GitHub repo)
- Backend: Render / Railway / Replit
- Mobile: Expo -> build a final APK / publish to Play Store

This skeleton is designed to be edited: add your real implementation for GPT/video generation endpoints, social OAuth flows, AdSense/AdMob integration, and live streaming backend modules.

Bonne construction — ready to customize and scale. 🚀
