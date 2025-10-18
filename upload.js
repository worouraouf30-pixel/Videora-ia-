import { useState } from 'react';
import Link from 'next/link';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');

  async function upload(e) {
    e.preventDefault();
    if (!file) return alert('Choose a file.');
    // Placeholder: upload should use Firebase Storage or backend signed URL.
    setMsg('Upload simulated. Configure Firebase Storage or backend for real uploads.');
    setFile(null);
  }

  return (
    <main style={{ padding:24, fontFamily:'system-ui, sans-serif' }}>
      <h1>Upload Clips</h1>
      <form onSubmit={upload}>
        <input type="file" accept="video/*,audio/*,image/*" onChange={e=>setFile(e.target.files[0])} />
        <div style={{ marginTop:8 }}>
          <button type="submit">Upload (simulate)</button>
        </div>
      </form>
      {msg && <div style={{ marginTop:12 }}>{msg}</div>}
      <p style={{ marginTop:20 }}><Link href="/">← Back</Link></p>
    </main>
  );
}
