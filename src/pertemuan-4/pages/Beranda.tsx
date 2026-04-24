import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Beranda() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1e1b4b] overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full text-white">
                <defs>
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-3xl">
            <h5 data-aos="fade-down" className="text-white/60 font-semibold tracking-widest mb-4">INVOFEST HARKAT NEGERI 2025</h5>
            <h1 data-aos="fade-right" data-aos-delay="200" className="text-5xl sm:text-7xl font-extrabold text-white mb-8 leading-tight">
              EXPLORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">BEYOND</span> LIMITS
            </h1>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg text-white/70 mb-12 leading-relaxed">
              Informatics Vocational Festival hadir untuk menginspirasi dan memberdayakan generasi muda Indonesia melalui kompetisi digital, seminar teknologi, dan workshop praktis.
            </p>
            <div data-aos="zoom-in" data-aos-delay="600" className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#b91c1c] text-white font-bold rounded-lg hover:bg-[#991b1b] transition-all transform hover:scale-105">
                INFO SELENGKAPNYA
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105">
                HUBUNGI PANITIA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Join Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div data-aos="fade-right">
                    <h2 className="text-[#1e1b4b] text-4xl font-bold mb-6">Join with us and get your future</h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      Bersiaplah untuk mengembangkan potensi diri Anda bersama para ahli di bidang teknologi informasi. 
                      Invofest menyediakan wadah yang tepat untuk belajar, berkompetisi, dan berkolaborasi.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-[#1e1b4b] text-4xl font-black mb-1">5+</h3>
                            <p className="text-gray-400 font-medium">Main Events</p>
                        </div>
                        <div>
                            <h3 className="text-[#1e1b4b] text-4xl font-black mb-1">1000+</h3>
                            <p className="text-gray-400 font-medium">Participants</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-[#1e1b4b] rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                      alt="Team working" 
                      className="rounded-2xl shadow-2xl relative z-10 w-full"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 data-aos="fade-up" className="text-[#1e1b4b] text-4xl font-bold mb-10">Tentang Invofest</h2>
            <div data-aos="fade-up" data-aos-delay="200" className="max-w-4xl mx-auto">
                <p className="text-gray-600 text-lg leading-[2rem]">
                  Informatics Vocational Festival (Invofest) adalah festival IT tahunan yang diselenggarakan oleh 
                  Universitas Harkat Negeri. Acara ini mencakup berbagai kompetisi nasional, seminar inspiratif dari tokoh teknologi terkemuka, 
                  serta workshop intensif untuk mengasah skill teknis mahasiswa dan pelajar di seluruh Indonesia.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}
