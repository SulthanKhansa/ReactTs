import React from 'react';

export interface HeroProps {
  title: string;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  mascotSrc: string;
  buttons?: React.ReactNode;
}

export const Hero = ({ title, subtitle, description, mascotSrc, buttons }: HeroProps) => {
    return (
      <div className="pt-2 lg:pt-4 pb-12">
          <div className="max-w-screen-xl mx-auto">
              <div className="w-full h-fit p-4 px-8">
                  <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-3 lg:gap-12">
                      <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                          <h1 data-aos="fade-right" data-aos-delay="300" className="font-semibold text-[#7B2440] text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
                          <h2 data-aos="fade-right" data-aos-delay="450" className="font-semibold text-[#7B2440] text-xl sm:text-2xl lg:text-3xl">{subtitle}</h2>
                          <div data-aos="fade-right" data-aos-delay="300" className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600">
                              {description}
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mt-3">
                              {buttons || (
                                  <button data-aos="zoom-in" data-aos-delay="300" className="before:ease relative px-5 py-3 overflow-hidden border border-[#7B2440] bg-[#7B2440] text-white transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-12 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-56 text-[0.75rem] sm:text-base rounded-md uppercase font-bold tracking-wider">
                                      <span className="relative z-10">Daftar Sekarang</span>
                                  </button>
                              )}
                          </div>
                      </div>
                      <div className="flex justify-center flex-shrink-0" data-aos="fade-left" data-aos-delay="100">
                        <img src={mascotSrc} alt={title} className="w-[320px] sm:w-[400px] lg:w-[450px] drop-shadow-2xl" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  };
