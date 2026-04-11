export const Hero = () => {
    return (
      <div className="pt-28">
          <div className="max-w-screen-xl mx-auto">
              <div className="w-full h-fit p-4 px-8">
                  <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-3">
                      <div className="flex flex-col gap-3 sm:gap-4">
                          <h1 data-aos="fade-right" data-aos-delay="300" className="font-semibold text-invofest text-3xl sm:text-4xl lg:text-5xl">IT Workshop</h1>
                          <h2 data-aos="fade-right" data-aos-delay="450" className="font-semibold text-invofest text-xl sm:text-2xl lg:text-3xl">“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</h2>
                          <p data-aos="fade-right" data-aos-delay="300" className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600">
                              IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan
                              yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
                          </p>
                          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mt-3">
                              <button data-aos="zoom-in" data-aos-delay="300" className="before:ease relative px-3 py-2 sm:px-4 sm:py-3 overflow-hidden border border-invofest bg-invofest text-white transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-12 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-56 text-[0.75rem] sm:text-base rounded-sm sm:rounded-lg">
                                  <span className="relative z-10">Daftar Sekarang</span>
                              </button>
                          </div>
                      </div>
                      <img src="/assets/Maskot-Workshop.png" alt="hero-landing-page" className="w-[320px] sm:w-[400px]" data-aos="fade-up" data-aos-delay="100" />
                  </div>
              </div>
          </div>
      </div>
    );
  };
