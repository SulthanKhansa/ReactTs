import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex bg-white">
      {/* Sisi Kiri: Robot Mascot */}
      <div className="hidden lg:flex w-1/2 bg-[#1e1b4b] items-center justify-center p-12 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
            <img 
              src="/assets/Maskot-Workshop.png" 
              alt="Invofest Robot" 
              className="w-full max-w-md drop-shadow-2xl animate-float"
            />
            <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Explore Beyond Limits</h2>
                <p className="text-white/70">Bergabunglah dengan komunitas digital terbesar di Invofest 2025</p>
            </div>
        </div>
      </div>

      {/* Sisi Kanan: Form Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
