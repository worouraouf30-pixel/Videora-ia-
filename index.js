import Link from 'next/link';
import AuthButton from '../components/AuthButton';
import AdSlot from '../components/AdSlot';

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <header>
        <h1>Videora IA</h1>
        <p>Your AI studio — English by default.</p>
        <AuthButton />
      </header>

      <AdSlot position="top" />

      <section style={{ marginTop: 24 }}>
        <h2>Start building</h2>
        <ul>
          <li><Link href="/chat">Chat with AI (text + voice)</Link></li>
          <li><Link href="/upload">Upload clips</Link></li>
          <li><Link href="/help">Help & Support</Link></li>
          <li><Link href="/settings">Settings (enter API keys)</Link></li>
        </ul>
      </section>

      <AdSlot position="bottom" />

    </main>
  );
}
