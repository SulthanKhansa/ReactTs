import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Hero } from '../../components/Hero';
import { CategoryCard } from '../../components/CategoryCard';
import { FaqItem } from '../../components/FaqItem';

export default function Competition() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const categories = [
    {
      id: 1,
      title: 'Poster Design Competition',
      description: 'Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.',
      imageUrl: '/assets/competition/web_design.jpg',
    },
    {
      id: 2,
      title: 'UI/UX Design Competition',
      description: 'UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.',
      imageUrl: '/assets/competition/ui_ux.jpg',
    },
    {
      id: 3,
      title: 'Web Design Competition',
      description: 'Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.',
      imageUrl: '/assets/competition/software_dev.jpg',
    },
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
    <div className="bg-white">
      <Hero
        title="IT Competition"
        subtitle="“From Creation to Innovation”"
        description={<p>Kompetisi dalam INVOFEST ini mengusung tema <strong>"From Creation to Innovation"</strong>. Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.</p>}
        mascotSrc="/assets/Maskot-Lomba.png"
      />

      {/* DESKRIPSI & KATEGORI */}
      <div className="bg-invofest_secondary w-full h-fit relative">
          <img src="/assets/wave-top.png" alt="wave" className="w-full relative top-0" />
          <div className="max-w-screen-xl mx-auto py-20">
              <div className="w-full h-fit p-4 px-8 mb-16">
                  <h1 data-aos="zoom-in-up" data-aos-delay="300" className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5 uppercase tracking-wide">Deskripsi Kompetisi</h1>
                  <p data-aos="zoom-in-up" data-aos-delay="450" className="text-center text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600">
                      Kompetisi atau perlombaan yang ada dalam kegiatan <span className="font-bold text-slate-800">INVOFEST (Informatics Vocational Festival) 2025</span> adalah diantaranya National Poster Design Competition, UI/UX Design Competition, dan juga Web Design Competition. Kompetisi dalam INVOFEST ini mengusung tema <span className="font-bold text-slate-800">“From Creation to Innovation”</span>. Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab sosial.
                  </p>
              </div>

              <div className="w-full h-fit p-4 px-8 mt-20">
                <h1 data-aos="zoom-in-up" data-aos-delay="300" className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-5">Kategori Lomba</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 py-5 px-2">
                  {categories.map((cat, index) => (
                    <CategoryCard 
                      key={cat.id} 
                      title={cat.title} 
                      description={cat.description} 
                      imageUrl={cat.imageUrl} 
                      aosDelay={String(300 + index * 200)}
                    />
                  ))}
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

      {/* ===== SPONSORS ===== */}
      <section className="bg-white py-16 px-6 lg:px-10 border-t border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          <h3 data-aos="fade-up" className="text-slate-400 text-xs font-bold mb-10 uppercase tracking-[0.5em] text-center">Sponsor INVOFEST 2025</h3>
          <div className="flex flex-wrap justify-center gap-10 grayscale opacity-50">
            {[1,2,3,4].map(i => <div key={i} className="w-32 h-12 bg-slate-100 rounded-lg" />)}
          </div>
        </div>
      </section>

      {/* ===== MEDIA PARTNERS ===== */}
      <section className="bg-white py-16 px-6 lg:px-10 border-t border-slate-100">
        <div className="max-w-screen-xl mx-auto">
          <h3 data-aos="fade-up" className="text-slate-400 text-xs font-bold mb-10 uppercase tracking-[0.5em] text-center">Media Partner INVOFEST 2025</h3>
          <div className="flex flex-wrap justify-center gap-8 grayscale opacity-50">
            {[1,2,3,4,5].map(i => <div key={i} className="w-24 h-10 bg-slate-100 rounded-lg" />)}
          </div>
        </div>
      </section>

    </div>
  );
}