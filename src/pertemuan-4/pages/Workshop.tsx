import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Workshop() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const data = [
    { id: 1, title: 'Mobile Development', desc: 'Mempelajari pembuatan aplikasi mobile dengan teknologi terkini.', mascot: '/assets/Maskot-Workshop.png' },
    { id: 2, title: 'Artificial Intelligence', desc: 'Deep dive ke dunia AI dan Machine Learning untuk masa depan.', mascot: '/assets/Maskot-Workshop.png' },
    { id: 3, title: 'Cyber Security', desc: 'Keamanan data dan etika hacking di era digital yang kompleks.', mascot: '/assets/Maskot-Workshop.png' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1e1b4b] py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 data-aos="fade-down" className="text-4xl sm:text-6xl font-bold text-white mb-4">Workshop</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-white/60 text-lg uppercase tracking-widest font-semibold">Intensive Hands-on Experience</p>
        </div>
      </div>

      {/* Main Sections */}
      <section className="py-24 space-y-32">
        {data.map((item, index) => (
          <div key={item.id} className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
                <div data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} className="w-full lg:w-1/2">
                    <div className="relative group">
                       <div className="absolute -inset-8 bg-indigo-100 rounded-full opacity-50 blur-3xl group-hover:bg-blue-100 transition-colors"></div>
                       <img 
                         src={item.mascot} 
                         alt={item.title} 
                         className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl transform transition-transform group-hover:scale-105" 
                       />
                    </div>
                </div>
                <div data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-black text-[#1e1b4b] leading-[1.1]">{item.title}</h2>
                    <p className="text-gray-500 text-xl leading-relaxed">
                      {item.desc} Workshop ini akan membimbing Anda dari level dasar hingga mampu membangun proyek nyata secara langsung di bawah bimbingan mentor berpengalaman.
                    </p>
                    <button className="px-12 py-5 bg-[#b91c1c] text-white font-black rounded-lg hover:bg-[#1e1b4b] transition-all transform hover:scale-105 shadow-xl shadow-red-100 uppercase tracking-widest text-sm">
                        Registrasi Sekarang
                    </button>
                </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
