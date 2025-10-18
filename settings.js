import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Settings() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  const [openai, setOpenai] = useState('');
  const [adsense, setAdsense] = useState('');

  useEffect(()=> {
    // load keys from localStorage for easy setup (demo)
    setOpenai(localStorage.getItem('OPENAI_API_KEY') || '');
    setAdsense(localStorage.getItem('ADSENSE_KEY') || '');
    setLang(localStorage.getItem('VIDEORA_LANG') || 'en');
    setTheme(localStorage.getItem('VIDEORA_THEME') || 'light');
  }, []);

  function save() {
    localStorage.setItem('OPENAI_API_KEY', openai);
    localStorage.setItem('ADSENSE_KEY', adsense);
    localStorage.setItem('VIDEORA_LANG', lang);
    localStorage.setItem('VIDEORA_THEME', theme);
    alert('Settings saved locally. For production set env vars in Vercel: OPENAI_API_KEY, NEXT_PUBLIC_ADSENSE_CLIENT.');
  }

  return (
    <main style={{ padding:24, fontFamily:'system-ui, sans-serif' }}>
      <h1>Settings</h1>
      <div>
        <label>Default language:
          <select value={lang} onChange={e=>setLang(e.target.value)} style={{ marginLeft:8 }}>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </label>
      </div>
      <div style={{ marginTop:8 }}>
        <label>Theme:
          <select value={theme} onChange={e=>setTheme(e.target.value)} style={{ marginLeft:8 }}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      <div style={{ marginTop:12 }}>
        <label>OpenAI API key (for testing, saved to localStorage):</label><br/>
        <input value={openai} onChange={e=>setOpenai(e.target.value)} placeholder="sk-..." style={{ width:'100%', padding:8 }} />
      </div>

      <div style={{ marginTop:12 }}>
        <label>AdSense Client ID (for testing, saved to localStorage):</label><br/>
        <input value={adsense} onChange={e=>setAdsense(e.target.value)} placeholder="ca-pub-XXXXXXXX" style={{ width:'100%', padding:8 }} />
      </div>

      <div style={{ marginTop:12 }}>
        <button onClick={save}>Save settings</button>
        <p style={{ marginTop:8 }}>Note: For production, add keys to Vercel environment variables.</p>
      </div>

      <p style={{ marginTop:20 }}><Link href="/">← Back</Link></p>
    </main>
  );
}
