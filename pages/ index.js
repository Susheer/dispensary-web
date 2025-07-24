import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState('');

  async function login() {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    const data = await res.json();
    setMsg(data.authenticated ? 'Welcome to Sai Clinic ✅' : 'Login Failed ❌');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-4">Sai Clinic Login</h1>
      <input type="text" placeholder="Username" onChange={e => setUser({...user, username: e.target.value})} className="mb-2 p-2 border rounded w-64" />
      <input type="password" placeholder="Password" onChange={e => setUser({...user, password: e.target.value})} className="mb-2 p-2 border rounded w-64" />
      <button onClick={login} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Login</button>
      <p className="mt-4 text-sm text-gray-800">{msg}</p>
    </div>
  );
} 