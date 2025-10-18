import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Admin() {
  const [tickets, setTickets] = useState([]);

  useEffect(()=> {
    async function load() {
      const r = await fetch('/api/support-list');
      const j = await r.json();
      setTickets(j.tickets || []);
    }
    load();
  }, []);

  return (
    <main style={{ padding:24, fontFamily:'system-ui, sans-serif' }}>
      <h1>Admin Dashboard</h1>
      <p>Prototype admin. Protect this page in production!</p>
      <h2>Support tickets</h2>
      <ul>
        {tickets.length ? tickets.map((t,i)=>(<li key={i}>{t}</li>)) : <li>No tickets yet</li>}
      </ul>

      <p style={{ marginTop:20 }}><Link href="/">← Back</Link></p>
    </main>
  );
}
