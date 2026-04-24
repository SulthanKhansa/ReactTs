import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Competition() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const comps = [
    { id: 1, title: 'Web Design', category: 'Mahasiswa/Umum', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'UI/UX Design', category: 'Mahasiswa/Umum', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Cyber Security', category: 'Mahasiswa/Umum', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Networking Support', category: 'Siswa SMK/SMA', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Mobile Apps Development', category: 'Mahasiswa/Umum', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Graphic Design', category: 'Siswa SMK/SMA', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1e1b4b] py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 data-aos="fade-down" className="text-4xl sm:text-6xl font-bold text-white mb-4">Competition</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-white/60 text-lg uppercase tracking-widest font-semibold">Join and Winning This Competition</p>
        </div>
      </div>

      {/* Grid Competition */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {comps.map((comp, idx) => (
              <div 
                key={comp.id} 
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={comp.image} 
                    alt={comp.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white text-xs font-bold bg-[#b91c1c] px-3 py-1 rounded-full uppercase tracking-wider">{comp.category}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1e1b4b] mb-4 group-hover:text-[#b91c1c] transition-colors">{comp.title}</h3>
                  <button className="w-full py-4 text-sm font-black text-gray-400 group-hover:text-white group-hover:bg-[#b91c1c] border-2 border-gray-200 group-hover:border-[#b91c1c] rounded-xl transition-all duration-300 uppercase tracking-widest">
                    INFO SELENGKAPNYA
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}