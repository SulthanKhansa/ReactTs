import { useState, type ReactNode } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import AuthLayout from '../pertemuan-4/layout/AuthLayout';
import Login from '../pertemuan-4/pages/Login';
import Register from '../pertemuan-4/pages/Register';

interface ProtectedRouteProps {
  children: ReactNode;
  onNavigate?: (page: string) => void;
}

export default function ProtectedRoute({ children, onNavigate }: ProtectedRouteProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [authView, setAuthView] = useState<'login' | 'register'>('login');

  if (!isAuthenticated) {
    return (
      <AuthLayout>
        {authView === 'login' ? (
          <Login 
            onToggle={() => setAuthView('register')} 
            onNavigate={undefined} 
          />
        ) : (
          <Register onToggle={() => setAuthView('login')} />
        )}
      </AuthLayout>
    );
  }

  return <>{children}</>;
}
