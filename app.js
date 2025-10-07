// Vidéora IA - site shell
const strings = {
  fr: {
    heroTitle: "Bienvenue sur Vidéora IA",
    heroSubtitle: "L'intelligence créative du futur.",
    ctaStart: "Découvrir",
    ctaDemo: "Démo",
    featuresTitle: "Ce que nous allons construire",
    f1: "Génération d'images",
    f1desc: "Crée des visuels pro en quelques secondes.",
    f2: "Génération de vidéos",
    f2desc: "Transforme tes idées en clips courts et impactants.",
    f3: "Applications sans code",
    f3desc: "Connecte l'IA à ton business, simple et solide.",
    roadmapTitle: "Roadmap"
  },
  en: {
    heroTitle: "Welcome to Vidéora IA",
    heroSubtitle: "Creative intelligence of the future.",
    ctaStart: "Discover",
    ctaDemo: "Demo",
    featuresTitle: "What we'll build",
    f1: "Image generation",
    f1desc: "Create pro visuals in seconds.",
    f2: "Video generation",
    f2desc: "Turn ideas into short impactful clips.",
    f3: "No-code apps",
    f3desc: "Connect AI to your business, simple and solid.",
    roadmapTitle: "Roadmap"
  }
};

function applyLanguage(lang){
  const s = strings[lang] || strings['fr'];
  document.getElementById('heroTitle').textContent = s.heroTitle;
  document.getElementById('heroSubtitle').textContent = s.heroSubtitle;
  document.getElementById('ctaStart').textContent = s.ctaStart;
  document.getElementById('ctaDemo').textContent = s.ctaDemo;
  document.getElementById('featuresTitle').textContent = s.featuresTitle;
  document.getElementById('f1').textContent = s.f1;
  document.getElementById('f1desc').textContent = s.f1desc;
  document.getElementById('f2').textContent = s.f2;
  document.getElementById('f2desc').textContent = s.f2desc;
  document.getElementById('f3').textContent = s.f3;
  document.getElementById('f3desc').textContent = s.f3desc;
  document.getElementById('roadmapTitle').textContent = s.roadmapTitle;
}

function detectLanguage(){
  const nav = navigator.language || navigator.userLanguage || 'fr';
  const short = nav.split('-')[0];
  if(short === 'en') return 'en';
  return 'fr';
}

function initTheme(){
  const stored = localStorage.getItem('theme');
  const body = document.body;
  if(stored === 'light'){
    body.classList.remove('dark');
    body.style.background = '#f7fafc';
    body.style.color = '#0b1220';
  } else {
    // dark default (no class change needed)
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  // Language auto-detect and apply
  const lang = detectLanguage();
  applyLanguage(lang);

  // UI controls
  document.getElementById('langToggle').addEventListener('click', ()=>{
    const current = document.getElementById('ctaStart').textContent.toLowerCase();
    const newLang = current.includes('discover') ? 'fr' : 'en';
    applyLanguage(newLang);
  });

  document.getElementById('themeToggle').addEventListener('click', ()=>{
    const body = document.body;
    if(body.style.background && body.style.background.includes('#f7fafc')){
      // switch to dark
      body.style.background = 'linear-gradient(180deg,var(--bg),#07080a)';
      body.style.color = '#e6eef6';
      localStorage.setItem('theme','dark');
    } else {
      // switch to light
      body.style.background = '#f7fafc';
      body.style.color = '#0b1220';
      localStorage.setItem('theme','light');
    }
  });

  initTheme();

  // Simulate loader
  setTimeout(()=> {
    const loader = document.getElementById('loader');
    if(loader) loader.style.display = 'none';
  }, 900);
});
