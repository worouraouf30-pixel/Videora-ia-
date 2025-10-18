import '../styles/globals.css';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    try {
      initializeApp(firebaseConfig);
    } catch (e) {
      // ignore if already initialized
    }
  }, []);
  return <Component {...pageProps} />
}
