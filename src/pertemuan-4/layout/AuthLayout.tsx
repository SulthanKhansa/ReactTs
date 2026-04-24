import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-screen w-full flex bg-white overflow-hidden">
      {/* Sisi Kiri: Robot Mascot (Sederhana) */}
      <div className="hidden lg:flex w-1/2 bg-white items-center justify-center p-12 border-r border-gray-100">
        <div className="flex flex-col items-center gap-8">
            <img 
              src="/assets/Maskot-Workshop.png" 
              alt="Invofest Robot" 
              className="w-full max-w-sm"
            />
        </div>
      </div>

      {/* Sisi Kanan: Form Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>
      <style>{`
        html, body {
          overflow: hidden !important;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
