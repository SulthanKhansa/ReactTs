import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function MainLayout({ children, activePage, onPageChange }: MainLayoutProps) {
  const menuItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'competition', label: 'Competition' },
    { id: 'seminar', label: 'Seminar' },
    { id: 'workshop', label: 'Workshop' },
    { id: 'talkshow', label: 'Talkshow' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Navbar Adopsi desain official */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => onPageChange('beranda')}>
              <img src="/assets/nav-logo.png" className="h-10 w-auto" alt="Invofest Logo" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    activePage === item.id ? 'text-[#1e1b4b] border-b-2 border-[#1e1b4b]' : 'text-gray-500 hover:text-[#1e1b4b]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => onPageChange('profile')} 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                title="Login / Profile"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="text-2xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
              </button>
            </div>

            {/* Mobile Burger (Simple) */}
            <div className="md:hidden flex items-center">
               <button className="text-gray-600 p-2">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer Adopsi desain official */}
      <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 py-12 lg:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div className="col-span-1 lg:col-span-1">
                      <img src="/assets/nav-logo.png" className="h-12 mb-6" alt="Invofest Logo" />
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Informatics Vocational Festival - Menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.
                      </p>
                  </div>
                  
                  <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Navigasi</h3>
                      <ul className="space-y-4">
                          {menuItems.map(item => (
                            <li key={item.id}>
                              <button onClick={() => onPageChange(item.id)} className="text-gray-500 hover:text-[#1e1b4b] text-sm transition-colors uppercase font-medium">
                                {item.label}
                              </button>
                            </li>
                          ))}
                      </ul>
                  </div>

                  <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Ikuti Kami</h3>
                      <div className="flex flex-col gap-4">
                        <a href="https://instagram.com/invofest_harkatnegeri" target="_blank" className="text-gray-500 hover:text-pink-600 flex items-center gap-3 text-sm">
                           <span>Instagram</span>
                        </a>
                        <a href="https://www.youtube.com/@invofest2024" target="_blank" className="text-gray-500 hover:text-red-600 flex items-center gap-3 text-sm">
                           <span>Youtube</span>
                        </a>
                      </div>
                  </div>

                  <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Lokasi</h3>
                      <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1835440601208!2d109.10518467424245!3d-6.868597267201685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sen!2sid!4v1724836082153!5m2!1sen!2sid" 
                          width="100%" height="150" style={{border:0}} allowFullScreen loading="lazy"
                        ></iframe>
                      </div>
                  </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-xs text-gray-400">© 2025 INVOFEST - All Rights Reserved.</p>
              </div>
          </div>
      </footer>
    </div>
  );
}
