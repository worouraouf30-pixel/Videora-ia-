// Placeholders for social OAuth configuration.
// Replace values in config/.env or here as you prefer.
module.exports = {
  tiktok: {
    clientId: process.env.TIKTOK_CLIENT_ID || '',
    clientSecret: process.env.TIKTOK_CLIENT_SECRET || '',
    redirectUri: process.env.TIKTOK_REDIRECT_URI || ''
  },
  facebook: {
    appId: process.env.FACEBOOK_APP_ID || '',
    appSecret: process.env.FACEBOOK_APP_SECRET || ''
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
  },
  youtube: {
    apiKey: process.env.YOUTUBE_API_KEY || ''
  }
};
