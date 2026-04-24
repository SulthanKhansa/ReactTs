import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Talkshow() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1e1b4b] py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 data-aos="fade-down" className="text-4xl sm:text-6xl font-bold text-white mb-4">Talkshow</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-white/60 text-lg uppercase tracking-widest font-semibold">Talkshow Inspiration With Influencers</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                <div data-aos="fade-right" className="w-full lg:w-3/5 space-y-8">
                    <h2 className="text-[#1e1b4b] text-4xl lg:text-6xl font-black leading-tight">
                       Membangun Karir IT Sambil Berbagi di Media Sosial
                    </h2>
                    <p className="text-gray-500 text-xl leading-relaxed">
                        Bergabunglah dalam sesi bincang santai bersama para Tech-Influencer yang telah berhasil membangun karir profesionalnya sembari memberikan dampak positif di media sosial.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="bg-gray-50 p-6 rounded-2xl flex-1 min-w-[200px] border border-gray-100">
                             <p className="text-gray-400 text-xs font-bold uppercase mb-2">Guest Star</p>
                             <h4 className="text-[#1e1b4b] font-black text-xl">Dea Afrizal</h4>
                             <p className="text-gray-500 text-sm">Tech Influencer & Developer</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl flex-1 min-w-[200px] border border-gray-100">
                             <p className="text-gray-400 text-xs font-bold uppercase mb-2">Moderator</p>
                             <h4 className="text-[#1e1b4b] font-black text-xl">Andhika Xp</h4>
                             <p className="text-gray-500 text-sm">Community Leader</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="w-full lg:w-2/5">
                    <div className="relative">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500 to-[#1e1b4b] opacity-10 blur-3xl rounded-full"></div>
                        <img 
                          src="/assets/Maskot-Workshop.png" 
                          alt="Talkshow" 
                          className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-20 bg-[#1e1b4b]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h3 data-aos="zoom-in" className="text-2xl sm:text-3xl font-bold mb-8">
              Terbatas hanya untuk 200 Peserta Offline!
            </h3>
            <button className="px-12 py-5 bg-white text-[#1e1b4b] font-black rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              BOOKING SEAT SEKARANG
            </button>
        </div>
      </section>
    </div>
  );
}
