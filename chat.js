import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { from: 'assistant', text: data.text || data.message }]);
    } catch (e) {
      setMessages(prev => [...prev, { from: 'assistant', text: 'Error contacting AI (set OPENAI_API_KEY).' }]);
    } finally {
      setLoading(false);
    }
  }

  // simple voice input (browser)
  useEffect(()=> {
    if (!('webkitSpeechRecognition' in globalThis) && !('SpeechRecognition' in globalThis)) return;
    const SpeechRecognition = globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.onresult = (e) => {
      const t = e.results[0][0].transcript;
      setInput(t);
    };
    // we won't auto-start; user can press the mic button (placeholder)
    // cleanup
    return () => rec.abort?.();
  }, []);

  return (
    <main style={{ padding:24, fontFamily:'system-ui, sans-serif' }}>
      <h1>Chat — Videora IA</h1>
      <div style={{ marginTop:16 }}>
        {messages.map((m,i)=> (
          <div key={i} style={{ textAlign: m.from==='user' ? 'right' : 'left', margin: '8px 0' }}>
            <span style={{ display:'inline-block', padding:8, borderRadius:8, background:'#f0f0f0' }}>{m.text}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop:12 }}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask the AI..." style={{ padding:8, width:'70%' }} />
        <button onClick={send} style={{ marginLeft:8, padding:'8px 12px' }}>{loading ? '...' : 'Send'}</button>
        <button onClick={()=>{
          // basic TTS for last assistant message
          const last = [...messages].reverse().find(m=>m.from==='assistant');
          if (!last) return alert('No assistant message to read.');
          const u = new SpeechSynthesisUtterance(last.text);
          speechSynthesis.speak(u);
        }} style={{ marginLeft:8 }}>🔊 Read</button>
      </div>

      <p style={{ marginTop:20 }}><Link href="/">← Back</Link></p>
    </main>
  );
}
