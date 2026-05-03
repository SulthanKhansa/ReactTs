import { useState } from 'react';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';

export default function P4Materi({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [view, setView] = useState<'login' | 'register'>('login');

  return (
    <AuthLayout>
      {view === 'login' ? (
        <Login 
          onToggle={() => setView('register')} 
          onNavigate={onNavigate}
        />
      ) : (
        <Register onToggle={() => setView('login')} />
      )}
    </AuthLayout>
  );
}
