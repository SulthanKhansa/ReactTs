import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Hero } from '../../components/Hero';
import { SpeakerCard } from '../../components/SpeakerCard';
import { FaqItem } from '../../components/FaqItem';

export default function Talkshow() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const speakers = [
    { id: 1, name: 'Moh. Ichsan Maulana', topic: 'Human Capital Information System', job: '(HCIS), PT. Garuda Daya Pratama Sejahtera', imageUrl: '/assets/talkshow/talkshow ichsan.png' },
    { id: 2, name: 'M. Zaim Zamzami', topic: 'Programmer, PT. Pertamina', job: 'Drilling Service Indonesia', imageUrl: '/assets/talkshow/talkshow zaim zamzami.png' },
    { id: 3, name: 'Daffa Zuhdan Muhtar', topic: 'Android Developer, PT. Astra', job: 'Internasional', imageUrl: '/assets/talkshow/talkshow daffa.png' },
    { id: 4, name: 'Bayu Adi Prasetiyo', topic: 'Software Engineer', job: 'KOMPAS.ID', imageUrl: '/assets/talkshow/talkshow bayu.png' },
  ];

  /* schedules removed */

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

  return (
    <div className="bg-white">
      <Hero
        title="IT Talkshow"
        subtitle="“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”"
        description={<p>Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan, yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif.</p>}
        mascotSrc="/assets/Maskot-Talkshow.png"
      />

      {/* TENTANG IT TALKSHOW */}
      <div className="bg-invofest_secondary w-full h-fit relative">
          <img src="/assets/wave-top.png" alt="wave" className="w-full relative top-0" />
          <div className="max-w-screen-xl mx-auto py-20">
              <div className="w-full h-fit p-4 px-8">
                  <h1 data-aos="zoom-in-up" data-aos-delay="300" className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5">Tentang IT Talkshow</h1>
                  <p data-aos="zoom-in-up" data-aos-delay="450" className="text-center text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600">
                      Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, muncul sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya? Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: <strong>“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.”</strong> Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
                  </p>
              </div>
          </div>
          <img src="/assets/wave-bot.png" alt="wave" className="w-full relative bottom-0" />
      </div>

      {/* TEMUI PEMBICARA KHUSUS KAMI */}
      <div className="max-w-screen-xl w-full h-fit relative mx-auto py-20 mb-20">
        <div className="w-full h-fit p-4 px-8">
          <h1 data-aos="zoom-in-up" data-aos-delay="300" className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5 sm:mb-44">
            Temui Pembicara Khusus Kami
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-40 mt-36 justify-center w-full px-2">
            {speakers.map((speaker, index) => (
              <SpeakerCard 
                key={speaker.id} 
                name={speaker.name} 
                topic={speaker.topic} 
                job={speaker.job} 
                imageUrl={speaker.imageUrl}
                aosDelay={String(300 + index * 200)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PELAKSANAAN IT TALKSHOW */}
      <div className="bg-invofest_secondary w-full h-fit relative">
          <img src="/assets/wave-top.png" alt="wave" className="w-full relative top-0" />
          <div className="max-w-screen-xl mx-auto py-20">
              <div className="w-full h-fit p-4 px-8">
                  <h1 data-aos="zoom-in-up" data-aos-delay="300" className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5">Pelaksanaan IT Talkshow</h1>
              </div>
              <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-2xl shadow-sm border-r-8 border-[#7B2440] p-4 flex flex-row items-center gap-5">
                  <div className="bg-[#7B2440] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-2xl shadow-md">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
                  </div>
                  <p className="text-slate-600 font-medium text-lg leading-snug">Senin, 24 November 2025</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="450" className="bg-white rounded-2xl shadow-sm border-r-8 border-[#7B2440] p-4 flex flex-row items-center gap-5">
                  <div className="bg-[#7B2440] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-2xl shadow-md">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                  </div>
                  <p className="text-slate-600 font-medium text-lg leading-snug">08.00 WIB - 12.00 WIB</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="bg-white rounded-2xl shadow-sm border-r-8 border-[#7B2440] p-4 flex flex-row items-center gap-5">
                  <div className="bg-[#7B2440] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-2xl shadow-md">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
                  </div>
                  <p className="text-slate-600 font-medium text-lg leading-snug">Aula Gedung C</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="750" className="bg-white rounded-2xl shadow-sm border-r-8 border-[#7B2440] p-4 flex flex-row items-center gap-5">
                  <div className="bg-[#7B2440] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-3xl shadow-md">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 0H48C21.49 0 0 21.49 0 48v464h384V48C384 21.49 362.5 0 336 0zM96 64h48v48H96V64zM96 160h48v48H96V160zM96 256h48v48H96V256zM288 448H224v-64h-64v64H96V384h192V448zM288 256h-48v-48h48V256zM288 160h-48v-48h48V160zM288 64h-48v48h48V64z"></path></svg>
                  </div>
                  <p className="text-slate-600 font-medium text-lg leading-snug">Kampus 1 (Mataram) Universitas Harkat Negeri</p>
                </div>
              </div>
          </div>
          <img src="/assets/wave-bot.png" alt="wave" className="w-full relative bottom-0" />
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="w-full h-fit p-4 px-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div data-aos="zoom-in" data-aos-delay="150" className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-slate-600">FAQ</span>
                <h2 className="mb-4 text-3xl font-bold text-slate-600 sm:text-[40px]/[48px]">
                  Punya Pertanyaan? Lihat <span className="text-invofest">Disini</span>
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
      </div>
    </div>
  );
}
