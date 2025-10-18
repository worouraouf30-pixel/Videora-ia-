import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useState } from 'react';

export default function AuthButton() {
  const [user, setUser] = useState(null);

  async function signIn() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (e) {
      console.error('Auth error', e);
      alert('Auth error. Check Firebase config.');
    }
  }

  async function logout() {
    try {
      await signOut(getAuth());
      setUser(null);
    } catch (e) {}
  }

  return (
    <div>
      {user ? <div>Connected: {user.displayName} <button onClick={logout} style={{ marginLeft:8 }}>Logout</button></div>
            : <button onClick={signIn}>Sign in with Google</button>}
    </div>
  );
}
