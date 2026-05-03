import { ReactNode, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';

interface ProtectedRouteProps {
  children: ReactNode;
  onNavigate?: (page: string) => void;
}

export default function ProtectedRoute({ children, onNavigate }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated && onNavigate) {
      // Jika tidak terautentikasi, arahkan ke halaman Login (Pertemuan 4 Materi)
      onNavigate('Materi'); 
    }
  }, [isAuthenticated, onNavigate]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center animate-pulse">
          <h2 className="text-2xl font-bold text-slate-400">Memeriksa Autentikasi...</h2>
          <p className="text-slate-400">Silakan login terlebih dahulu.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
