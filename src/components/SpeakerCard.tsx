interface SpeakerCardProps {
  name: string;
  topic: string;
  job: string;
  imageUrl: string;
  aosDelay?: string;
}

export const SpeakerCard = ({ name, topic, job, imageUrl, aosDelay }: SpeakerCardProps) => {
  return (
    <div data-aos="fade-down" data-aos-delay={aosDelay} className="pt-[7.5rem] pb-8 px-4 w-full h-auto max-w-md mx-auto rounded-xl text-center bg-white hover:bg-invofest_secondary transition-all border-invofest border-4 relative group shadow-lg shadow-invofest_dark">
      <div className="absolute -top-[6.5rem] left-0 right-0 flex justify-center w-full">
        <img src={imageUrl} alt="foto speaker" className="w-52 h-52 bg-white rounded-full object-cover border-y-invofest border-x-invofest_dark group-hover:border-x-invofest group-hover:border-y-invofest_dark border-8 group-hover:scale-105 transition-all duration-500 shadow-md" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-invofest font-bold mb-1 text-xl sm:text-2xl">{name}</h3>
        <p className="text-slate-500 text-base">{topic}</p>
        <p className="text-slate-500 text-base">{job}</p>
      </div>
    </div>
  );
};
