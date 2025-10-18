import Link from 'next/link';
export default function Help() {
  return (
    <main style={{ padding:24, fontFamily:'system-ui, sans-serif' }}>
      <h1>Help & Support</h1>
      <h2>Quick FAQ</h2>
      <p><strong>How to add OpenAI key?</strong> Set OPENAI_API_KEY in your Vercel project or paste it in Settings (for testing).</p>
      <p><strong>How to add AdSense?</strong> Add NEXT_PUBLIC_ADSENSE_CLIENT in Vercel or paste in Settings to test.</p>
      <p><strong>How to receive payments?</strong> AdSense usually requires account verification and payment method setup (follow Google docs).</p>

      <h2>Contact Support</h2>
      <form onSubmit={async (e)=>{ e.preventDefault(); const msg = e.target.elements.msg.value; await fetch('/api/support',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg})}); alert('Message sent (placeholder).'); e.target.reset();}}>
        <textarea name="msg" required style={{ width:'100%', minHeight:120 }} placeholder="Describe the issue..."></textarea>
        <div style={{ marginTop:8 }}><button type="submit">Send to support</button></div>
      </form>

      <p style={{ marginTop:20 }}><Link href="/">← Back</Link></p>
    </main>
  );
}
