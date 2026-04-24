import type { ReactNode } from 'react';
import { Home, Trophy, UserCircle, Monitor, Mic, User } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function MainLayout({ children, activePage, onPageChange }: MainLayoutProps) {
  const menuItems = [
    { id: 'beranda', label: 'Beranda', icon: <Home size={18} /> },
    { id: 'competition', label: 'Competition', icon: <Trophy size={18} /> },
    { id: 'seminar', label: 'Seminar', icon: <UserCircle size={18} /> },
    { id: 'workshop', label: 'Workshop', icon: <Monitor size={18} /> },
    { id: 'talkshow', label: 'Talkshow', icon: <Mic size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Precision Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onPageChange('beranda')}>
            <img src="/assets/nav-logo.png" className="h-[55px] w-auto" alt="Invofest Logo" />
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center gap-2 text-sm font-bold transition-all duration-200 ${
                  activePage === item.id 
                    ? 'text-[#7B2440]' 
                    : 'text-slate-700 hover:text-[#7B2440]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            <button 
              onClick={() => onPageChange('profile')} 
              className="p-1.5 border-2 border-slate-700 rounded-full text-slate-700 hover:text-[#7B2440] hover:border-[#7B2440] transition-all"
            >
              <User size={24} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Identical Footer */}
      <footer className="bg-invofest_secondary py-16 px-6 lg:px-10 relative">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-600">
            <div className="flex flex-col justify-between h-full">
                <img src="/assets/nav-logo.png" className="h-[60px] w-fit mb-8" alt="Footer Logo" />
                <p className="text-sm mt-10 md:mt-auto hidden sm:block">
                  &copy; {new Date().getFullYear()} INVOFEST. All Rights Reserved.
                </p>
            </div>
            
            <div>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6">Menu Navigasi</h3>
                <ul className="space-y-4">
                    {menuItems.map(item => (
                      <li key={item.id}>
                        <button onClick={() => onPageChange(item.id)} className="hover:text-[#7B2440] text-sm flex items-center gap-3 font-medium transition-colors">
                          {item.icon} {item.label}
                        </button>
                      </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6">Ikuti Kami</h3>
                <div className="flex flex-col gap-4">
                  <a href="#" className="hover:text-[#7B2440] flex items-center gap-3 text-sm font-medium transition-colors">
                     <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> Instagram
                  </a>
                  <a href="#" className="hover:text-[#7B2440] flex items-center gap-3 text-sm font-medium transition-colors">
                     <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg> Youtube
                  </a>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6">Alamat</h3>
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1835440601208!2d109.10518467424245!3d-6.868597267201685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sen!2sid!4v1724836082153!5m2!1sen!2sid" 
                    width="100%" height="150" style={{border:0}} loading="lazy"
                  ></iframe>
                </div>
            </div>
            
            <p className="text-sm mt-4 sm:hidden col-span-1 border-t border-red-100 pt-4">
              &copy; {new Date().getFullYear()} INVOFEST. All Rights Reserved.
            </p>
        </div>

        {/* Scroll To Top Fixed Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="fixed bottom-6 right-6 z-50 p-1 rounded-full border border-[#7B2440] text-white hover:-translate-y-1 transition-transform"
        >
          <div className="bg-[#7B2440] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
          </div>
        </button>
      </footer>
    </div>
  );
}
