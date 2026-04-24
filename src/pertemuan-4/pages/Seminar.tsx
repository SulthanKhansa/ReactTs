import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Seminar() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1e1b4b] py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 data-aos="fade-down" className="text-4xl sm:text-6xl font-bold text-white mb-4">Seminar</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-white/60 text-lg uppercase tracking-widest font-semibold">National Seminar Invofest 2025</p>
        </div>
      </div>

      {/* Main Poster Section */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div data-aos="fade-right" className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src="https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=1200" 
                          alt="Seminar Poster" 
                          className="w-full h-auto"
                        />
                        <div className="absolute top-6 right-6 bg-[#b91c1c] text-white font-bold px-6 py-2 rounded-lg transform rotate-3 shadow-lg">
                            SOON!
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="w-full lg:w-1/2 space-y-8">
                    <div>
                        <h5 className="text-[#b91c1c] font-bold uppercase tracking-widest mb-2">Seminar Nasional</h5>
                        <h2 className="text-[#1e1b4b] text-4xl sm:text-5xl font-black leading-tight">
                          Transformasi Digital: Navigasi Karir di Era Kecerdasan Buatan
                        </h2>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Dapatkan wawasan mendalam dari pakar industri teknologi mengenai bagaimana bersiap menghadapi tantangan karir masa depan yang didominasi oleh teknologi AI.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-700">
                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1e1b4b]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                             </div>
                             <span className="font-semibold text-base">Senin, 24 November 2025</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-700">
                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1e1b4b]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                             </div>
                             <span className="font-semibold text-base">Auditorium Universitas Harkat Negeri</span>
                        </div>
                    </div>
                    <button className="px-10 py-5 bg-[#1e1b4b] text-white font-black rounded-2xl hover:bg-[#b91c1c] transition-all transform hover:scale-105 shadow-xl shadow-blue-100">
                        DAFTAR SEKARANG
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
