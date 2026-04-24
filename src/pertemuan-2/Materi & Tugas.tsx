import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SpeakerCard } from '../components/SpeakerCard';
import { ScheduleCard } from '../components/ScheduleCard';
import { FaqItem } from '../components/FaqItem';

export default function Invofest() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const speakers = [
    { id: 1, name: "Lhuqita Fazry", topic: "Mobile Development", job: "Developer, Founder Rumah Coding Indonesia", imageUrl: "/assets/workshop/workshop mobile.png" },
    { id: 2, name: "M. Dendi Purwanto", topic: "Artificial Intelligence", job: "Software Engineer, PT. Mayar Kernel Supernova", imageUrl: "/assets/workshop/workshop AI.png" },
    { id: 3, name: "Danang Avan M", topic: "Cyber Security", job: "Security Analyst, Founder | Contributor TegalSec", imageUrl: "/assets/workshop/talkshow cyber.png" }
  ];

  const schedules = [
    {
      id: 1,
      topic: "Mobile Development",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      svgIcon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="inline text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5-12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
    },
    {
      id: 2,
      topic: "Artificial Intelligence",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
      svgIcon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"></path></svg>
    },
    {
      id: 3,
      topic: "Cyber Security",
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      svgIcon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="inline text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"></path></svg>
    }
  ];

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="IT Workshop" 
        subtitle="AI for a Sustainable Future" 
        description="Workshop didesain khusus untuk Generasi Z menghadapi tantangan keberlanjutan global." 
        mascotSrc="/assets/Maskot-Workshop.png" 
      />

      {/* TENTANG IT WORKSHOP */}
      <div className="bg-invofest_secondary w-full h-fit relative">
          <img src="/assets/wave-top.png" alt="wave" className="w-full relative top-0" />
          <div className="max-w-screen-xl mx-auto py-20">
              <div className="w-full h-fit p-4 px-8">
                  <h1 data-aos="zoom-in-up" data-aos-delay="300" className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5">Tentang IT Workshop</h1>
                  <p data-aos="zoom-in-up" data-aos-delay="450" className="text-center text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600">
                      Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z, 
                      para digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. 
                      Peserta akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi isu-isu lingkungan. 
                      Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang lebih baik.
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
          <div className="flex flex-col sm:flex-row gap-36 mt-36 sm:gap-10">
            {speakers.map((speaker, index) => (
              <SpeakerCard 
                key={speaker.id} 
                name={speaker.name} 
                topic={speaker.topic} 
                job={speaker.job} 
                imageUrl={speaker.imageUrl}
                aosDelay={String(500 + index * 500)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PELAKSANAAN IT WORKSHOP */}
      <div className="bg-invofest_secondary w-full h-fit relative">
          <img src="/assets/wave-top.png" alt="wave" className="w-full relative top-0" />
          <div className="max-w-screen-xl mx-auto py-20">
              <div className="w-full h-fit p-4 px-8">
                  <h1 data-aos="zoom-in-up" data-aos-delay="300" className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5">Pelaksanaan IT Workshop</h1>
              </div>
              <div className="w-full max-w-6xl m-auto justify-center items-center flex flex-wrap gap-5">
                {schedules.map((schedule, index) => (
                  <ScheduleCard 
                    key={schedule.id}
                    topic={schedule.topic}
                    date={schedule.date}
                    time={schedule.time}
                    location={schedule.location}
                    svgIcon={schedule.svgIcon}
                    aosDelay={String(500 + index * 500)}
                  />
                ))}
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
      
      {/* FOOTER */}
      <footer className="bg-invofest_secondary mt-8">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="lg:flex lg:justify-between">
                  <div className="mb-6 lg:mb-0">
                      <a href="/" className="flex items-center">
                          <img src="/assets/nav-logo.png" className="w-48" alt="Invofest Logo" />
                      </a>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Menu Navigasi</h2>
                          <ul className="text-gray-500 font-medium">
                              <li className="mb-4">
                                  <a className="hover:text-invofest flex items-center gap-2" href="/">
                                      Beranda
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a className="hover:text-invofest flex items-center gap-2" href="/seminar">
                                      Seminar
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a className="hover:text-invofest flex items-center gap-2" href="/competition">
                                      Competition
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a className="hover:text-invofest flex items-center gap-2" href="/workshop">
                                      Workshop
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a className="hover:text-invofest flex items-center gap-2" href="/talkshow">
                                      Talkshow
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Ikuti Kami</h2>
                          <ul className="text-gray-500 font-medium">
                              <li className="mb-4">
                                  <a href="https://instagram.com/invofest_harkatnegeri" className="hover:text-invofest flex items-center gap-2" target="_blank">Instagram</a>
                              </li>
                              <li className="mb-4">
                                  <a href="https://www.youtube.com/@invofest2024" className="hover:text-invofest flex items-center gap-2" target="_blank">Youtube</a>
                              </li>
                          </ul>
                      </div>
                      <div className="w-full">
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Alamat</h2>
                          <ul className="w-full text-gray-500 font-medium">
                              <li>
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1835440601208!2d109.10518467424245!3d-6.868597267201685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sen!2sid!4v1724836082153!5m2!1sen!2sid" width="250" height="200" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-[320px] sm:w-full lg:w-auto" style={{border: "none"}}></iframe>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center">© 2025 <a href="/" className="hover:underline">INVOFEST</a>. All Rights Reserved.</span>
              </div>
          </div>
      </footer>
    </div>
  );
}
