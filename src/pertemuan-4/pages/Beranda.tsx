import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaqItem } from '../../components/FaqItem';

const faqs1 = [
  { id: 1, question: "Apa itu INVOFEST?", answer: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital." },
  { id: 2, question: "Kapan dan dimana INVOFEST dilaksanakan?", answer: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online." },
  { id: 3, question: "Apakah ada biaya pendaftaran di INVOFEST?", answer: "Semua kegiatan dipastikan berbayar ya teman-teman." }
];

const faqs2 = [
  { id: 4, question: "Bagaimana saya mengetahui pemenang kompetisi?", answer: "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri." },
  { id: 5, question: "Apa yang didapat pemenang dalam kompetisi?", answer: "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat." },
  { id: 6, question: "Bagaimana cara mendaftar event?", answer: "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti." }
];

interface BerandaProps {
  onNavigate?: (name: string) => void;
}

export default function Beranda({ onNavigate }: BerandaProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white overflow-hidden">

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-2 lg:pt-4 pb-16 px-6 lg:px-10 bg-white">
        <div className="max-w-screen-xl mx-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="flex flex-col items-start text-left">
            <h1 className="text-5xl sm:text-7xl font-black text-[#7B2440] leading-none mb-6 tracking-tight uppercase">
              INVOFEST
            </h1>
            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-[520px]">
              Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema{' '}
              <span className="font-bold text-slate-800">"Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow"</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 bg-[#7B2440] text-white font-bold rounded-lg hover:bg-[#5a1a2e] transition-all text-sm uppercase">
                INFO SELENGKAPNYA
              </button>
              <button className="px-7 py-3 border-2 border-[#7B2440] text-[#7B2440] font-bold rounded-lg hover:bg-[#7B2440] hover:text-white transition-all text-sm uppercase">
                HUBUNGI PANITIA
              </button>
            </div>
          </div>
          <div data-aos="fade-left" className="flex justify-center lg:justify-end">
            <img src="/assets/Maskot-Hero.png" alt="Maskot Invofest" className="w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER: White → Pink ===== */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF1F2" />
        </svg>
      </div>

      {/* ===== TENTANG INVOFEST ===== */}
      <section id="tentang" className="bg-[#FFF1F2] py-16 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-0">
          <h2 data-aos="fade-right" className="text-[#7B2440] text-3xl lg:text-4xl font-black mb-6">Tentang INVOFEST</h2>
          <p data-aos="fade-up" className="text-slate-600 text-base leading-relaxed max-w-4xl mb-14">
            Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema{' '}
            <span className="font-bold text-slate-800">"Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow"</span>.{' '}
            Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional &amp; talkshow dengan para ahli teknologi.
          </p>

          {/* 4 Activity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "IT Seminar", page: "Seminar", desc: 'Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif" untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.' },
              { title: "IT Talkshow", page: "Talkshow", desc: 'Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan" membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.' },
              { title: "IT Competition", page: "Competition", desc: 'Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.' },
              { title: "IT Workshop", page: "Workshop", desc: "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan." },
            ].map((act, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}
                className="bg-white border-l-4 border-[#7B2440] rounded-r-xl p-6 shadow-sm flex flex-col gap-4">
                <h3 className="text-[#7B2440] font-black text-lg uppercase">{act.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{act.desc}</p>
                <button
                  onClick={() => onNavigate?.(act.page)}
                  className="mt-auto py-2.5 bg-[#7B2440] text-white text-xs font-bold rounded-lg uppercase hover:bg-[#5a1a2e] transition-all">
                  INFO SELENGKAPNYA
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER: Pink → White ===== */}
      <div className="w-full overflow-hidden leading-none bg-[#FFF1F2]">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* ===== IT SEMINAR — White, Teks Kiri, Maskot Kanan ===== */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="flex flex-col items-start">
            <h2 className="text-[#7B2440] text-4xl font-black mb-6">IT Seminar</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Seminar Nasional Teknologi Informasi ini mengangkat tema{' '}
              <span className="font-bold text-slate-800">"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif."</span>{' '}
              Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
            </p>
            <button onClick={() => onNavigate?.('seminar')} className="px-7 py-3 bg-[#7B2440] text-white font-bold rounded-lg hover:bg-[#5a1a2e] transition-all text-sm uppercase">
              DAFTAR IT SEMINAR
            </button>
          </div>
          <div data-aos="fade-left" className="flex justify-center lg:justify-end">
            <img src="/assets/Maskot-Seminar.png" alt="Maskot IT Seminar" className="w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER: White → Pink ===== */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF1F2" />
        </svg>
      </div>

      {/* ===== IT TALKSHOW — Pink, Maskot Kiri, Teks Kanan ===== */}
      <section className="bg-[#FFF1F2] py-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img src="/assets/Maskot-Talkshow.png" alt="Maskot IT Talkshow" className="w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-2xl" />
          </div>
          <div data-aos="fade-left" className="flex flex-col items-start order-1 lg:order-2">
            <h2 className="text-[#7B2440] text-4xl font-black mb-6">IT Talkshow</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Talkshow berskala nasional:{' '}
              <span className="font-bold text-slate-800">"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan."</span>{' '}
              Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
            </p>
            <button onClick={() => onNavigate?.('talkshow')} className="px-7 py-3 bg-[#7B2440] text-white font-bold rounded-lg hover:bg-[#5a1a2e] transition-all text-sm uppercase">
              DAFTAR IT TALKSHOW
            </button>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER: Pink → White ===== */}
      <div className="w-full overflow-hidden leading-none bg-[#FFF1F2]">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* ===== IT WORKSHOP — White, Teks Kiri, Maskot Kanan ===== */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="flex flex-col items-start">
            <h2 className="text-[#7B2440] text-4xl font-black mb-6">IT Workshop</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Workshop{' '}
              <span className="font-bold text-slate-800">'AI for a Sustainable Future: The Role of Z Generation in the Digital Era'</span>{' '}
              membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan. Peserta akan mendapatkan pelatihan langsung dari para praktisi industri dan mendapatkan sertifikat keikutsertaan yang diakui secara profesional.
            </p>
            <button onClick={() => onNavigate?.('workshop')} className="px-7 py-3 bg-[#7B2440] text-white font-bold rounded-lg hover:bg-[#5a1a2e] transition-all text-sm uppercase">
              DAFTAR IT WORKSHOP
            </button>
          </div>
          <div data-aos="fade-left" className="flex justify-center lg:justify-end">
            <img src="/assets/Maskot-Workshop.png" alt="Maskot IT Workshop" className="w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER: White → Pink ===== */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF1F2" />
        </svg>
      </div>

      {/* ===== IT COMPETITION — Pink, Maskot Kiri, Teks Kanan ===== */}
      <section className="bg-[#FFF1F2] py-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img src="/assets/Maskot-Lomba.png" alt="Maskot IT Competition" className="w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-2xl" />
          </div>
          <div data-aos="fade-left" className="flex flex-col items-start order-1 lg:order-2">
            <h2 className="text-[#7B2440] text-4xl font-black mb-6">IT Competition</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Kompetisi{' '}
              <span className="font-bold text-slate-800">"From Creation to Innovation"</span>{' '}
              mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan. Terdapat berbagai kategori lomba yang dapat diikuti oleh peserta dari seluruh Indonesia.
            </p>
            <button onClick={() => onNavigate?.('competition')} className="px-7 py-3 bg-[#7B2440] text-white font-bold rounded-lg hover:bg-[#5a1a2e] transition-all text-sm uppercase">
              DAFTAR IT COMPETITION
            </button>
          </div>
        </div>
      </section>

      {/* ===== WAVE DIVIDER: Pink → White ===== */}
      <div className="w-full overflow-hidden leading-none bg-[#FFF1F2]">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* ===== FAQ ===== */}
      <section className="max-w-screen-xl mx-auto py-20 px-6 lg:px-10">
        <div className="w-full h-fit p-4 px-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div data-aos="zoom-in" data-aos-delay="150" className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-slate-600">FAQ</span>
                <h2 className="mb-4 text-3xl font-bold text-slate-600 sm:text-[40px]/[48px]">
                  Punya Pertanyaan? <span className="text-invofest">Lihat Disini</span>
                </h2>
                <p className="text-base text-slate-600">
                  Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              {faqs1.map((faq, index) => (
                <FaqItem key={faq.id} question={faq.question} answer={faq.answer} aosDelay={String(50 + index * 150)} />
              ))}
            </div>
            <div className="w-full px-4 lg:w-1/2">
              {faqs2.map((faq, index) => (
                <FaqItem key={faq.id} question={faq.question} answer={faq.answer} aosDelay={String(500 + index * 150)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPONSORS ===== */}
      <section className="bg-white py-16 px-6 lg:px-10 border-t border-slate-100">
        <div className="max-w-screen-xl mx-0">
          <h3 data-aos="fade-up" className="text-slate-400 text-xs font-bold mb-10 uppercase tracking-[0.5em] text-center">Sponsor INVOFEST 2025</h3>
          <div className="flex flex-wrap justify-center gap-10 grayscale opacity-50">
            {[1,2,3,4].map(i => <div key={i} className="w-32 h-12 bg-slate-100 rounded-lg" />)}
          </div>
        </div>
      </section>

      {/* ===== MEDIA PARTNERS ===== */}
      <section className="bg-white py-16 px-6 lg:px-10 border-t border-slate-100">
        <div className="max-w-screen-xl mx-0">
          <h3 data-aos="fade-up" className="text-slate-400 text-xs font-bold mb-10 uppercase tracking-[0.5em] text-center">Media Partner INVOFEST 2025</h3>
          <div className="flex flex-wrap justify-center gap-8 grayscale opacity-50">
            {[1,2,3,4,5].map(i => <div key={i} className="w-24 h-10 bg-slate-100 rounded-lg" />)}
          </div>
        </div>
      </section>

    </div>
  );
}
